import { useRef } from 'react';
import useStableCallback from '../useStableCallback';

function usePersistFn<T extends (...args: any[]) => any>(fn: T) {
  const fnRef = useRef<T>(fn);

  fnRef.current = fn;

  return useStableCallback(((...args) => fnRef.current(...args)) as T, [fnRef]);
}

export default usePersistFn;
