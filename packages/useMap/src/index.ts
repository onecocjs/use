import { useRef } from 'react';
import useForceUpdate from '@onecocjs/use.forceupdate';
import useMemoized from '@onecocjs/use.memoized';

function useMap<K, V>(initialState?: [K, V][]) {
  const initialMap = useMemoized(() => {
    if (initialState) {
      return new Map<K, V>(initialState);
    }
    return new Map<K, V>();
  });
  const refMap = useRef(initialMap);
  const forceUpdate = useForceUpdate();

  const memoizedAction = useMemoized(() => ({
    set: function(key: K, value: V) {
      refMap.current.set(key, value);
      forceUpdate();
      return refMap.current;
    },
    get: function(key: K) {
      return refMap.current.get(key);
    },
    del: function(key: K) {
      refMap.current.delete(key);
      forceUpdate();
      return refMap.current;
    },
    reset: function() {
      refMap.current = new Map<K, V>(initialState);
      forceUpdate();
      return refMap.current;
    },
  }));

  return {
    mapState: refMap.current,
    ...memoizedAction,
  };
}

export default useMap;
