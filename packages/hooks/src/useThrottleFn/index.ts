import { throttle } from 'lodash';
import { useRef } from 'react';
import useMemoized from '../useMemoized';

interface UseThrottleOptions {
  /** 指定调用在节流开始前 */
  leading?: boolean;
  /** 指定调用在节流结束后。 */
  trailing?: boolean;
}

function useThrottleFn<T extends (...args: any) => any>(
  fn: T,
  wait: number,
  options?: UseThrottleOptions,
) {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  return useMemoized(
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
}

export default useThrottleFn;
