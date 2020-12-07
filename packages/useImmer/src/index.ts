import produce, { Draft } from 'immer';
import { useState, useReducer, useCallback, useMemo } from 'react';

export type Reducer<S = any, A = any> = (
  draftState: Draft<S>,
  action: A,
) => void | S;

export type Updater<S> = (f: (draft: Draft<S>) => void | S) => void;

export type ImmerHook<S> = [S, Updater<S>];

export function useImmer<S = any>(
  initialValue: S | (() => S),
): {
  state: S;
  update: (f: (draft: Draft<S>) => void | S) => void;
};

export function useImmer(initialValue: any) {
  const [state, updateValue] = useState(initialValue);
  return {
    state,
    update: useCallback(updater => {
      updateValue(produce(updater));
    }, []),
  };
}

export type Action<P = undefined, M = undefined> = {
  type: string;
  payload?: P;
  meta?: M;
};

export type Method<S> = {
  [name: string]: <A extends Action<any, any>>(state: S, action: A) => void;
};

function useInitialReducers<M extends Method<any>>(methodObject: M) {
  return useMemo(() => {
    return produce(function(state: any, action: any) {
      return methodObject[action.type](state, action);
    });
  }, []);
}

function useInitialActions<M extends Method<any>>(
  methodObject: M,
  dispatch: any,
) {
  return useMemo(() => {
    return Object.keys(methodObject)
      .map(k => ({
        [k]: function(payload?: any, meta?: any) {
          return dispatch({ type: k, payload, meta });
        },
      }))
      .reduce((prev, next) => ({ ...prev, ...next }), {});
  }, []);
}

export function useImmerMethod<S, M extends Method<S>>(
  initialState: S,
  methodObject: M,
  initialAction?: any,
): {
  state: S;
  dispatch: (action: any) => any;
  actions: {
    [K in keyof M]: (
      payload?: Parameters<M[K]>[1]['payload'],
      meta?: Parameters<M[K]>[1]['meta'],
    ) => void;
  };
} {
  const reducers = useInitialReducers(methodObject);

  const [state, dispatch] = useReducer(
    reducers,
    initialState as any,
    initialAction,
  );

  const actions = useInitialActions(methodObject, dispatch);

  return {
    state,
    dispatch,
    actions,
  } as any;
}

export function useImmerReducer<S = any, A = any>(
  initialState: S,
  reducer: Reducer<S, A>,
  initialAction?: any,
) {
  const cachedReducer = useMemo(() => produce(reducer), [reducer]);
  const [state, dispatch] = useReducer(
    cachedReducer,
    initialState as any,
    initialAction,
  );
  return {
    state,
    dispatch,
  };
}
