import { useState } from 'react';
import { useImmerMethod, Action, useImmerReducer, useImmer } from '../src';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useImmer', function() {
  it('useImmer', function() {
    const hooks = renderHook(() => {
      return useImmer({ user: { name: '张三' } });
    });
    expect(hooks.result.current.state.user.name).toEqual('张三');
    act(() => {
      hooks.result.current.update(draft => {
        draft.user.name = '李四';
      });
    });
    expect(hooks.result.current.state.user.name).toEqual('李四');
  });
  it('useImmerMethod', function() {
    const hooks = renderHook(() => {
      const [, update] = useState({});
      const { state, actions } = useImmerMethod(
        { user: { name: '张三' } },
        {
          changeName(state, action: Action<{ newName: string }>) {
            state.user.name = action.payload?.newName ?? '';
          },
        },
      );
      return {
        state,
        actions,
        update: () => update({}),
      };
    });
    expect(hooks.result.current.state.user.name).toEqual('张三');
    act(() => {
      hooks.result.current.actions.changeName({ newName: 'xx' });
    });
    expect(hooks.result.current.state.user.name).toEqual('xx');
    act(hooks.result.current.update);
    expect(hooks.result.current.state.user.name).toEqual('xx');
  });
  it('useImmerReducer', function() {
    const hooks = renderHook(() => {
      const [, update] = useState({});
      const { state, dispatch } = useImmerReducer(
        { user: { name: '张三' } },
        function(state, action) {
          switch (action.type) {
            case 'change':
              state.user.name = action.payload.newName;
              break;
            default:
              return state;
          }
        },
      );
      return {
        state,
        dispatch,
        update: () => update({}),
      };
    });
    expect(hooks.result.current.state.user.name).toEqual('张三');
    act(() => {
      hooks.result.current.dispatch({
        type: 'change',
        payload: { newName: 'xx' },
      });
    });
    expect(hooks.result.current.state.user.name).toEqual('xx');
  });
});
