import { throttle } from 'lodash';
import { useRef } from 'react';
import useMemoized from '../useMemoized';

interface UseThrottleOptions {
  leading?: boolean;
  trailing?: boolean;
}

function useThrottleFn<T extends (...args: any) => any>(
  fn: T,
  wait?: number,
  options?: UseThrottleOptions,
) {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  const run = useMemoized(
    () =>
      throttle<T>(
        ((...args: any[]) => {
          return fnRef.current(...args);
        }) as T,
        wait,
        options,
      ),
    [],
  );

  const { cancel, flush } = run;

  return {
    run,
    cancel,
    flush,
  };
}

export default useThrottleFn;
