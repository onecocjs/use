import { useRef } from 'react';
import useStableCallback from '../useStableCallback';
import { debounce, throttle } from 'lodash';

export interface Options {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
  action: 'throttle' | 'debounce';
}

function usePersistFn<T extends (...args: any[]) => any>(
  fn: T,
  options?: Options,
) {
  const fnRef = useRef<T>(fn);

  fnRef.current = fn;

  const wait = options?.wait ?? 1000;

  if (options?.action === 'debounce') {
    return useStableCallback(
      debounce((...args) => fnRef.current?.(...args), wait, {
        leading: options?.leading ?? false,
        trailing: options?.leading ?? true,
      }),
      [fnRef],
    );
  }
  if (options?.action === 'throttle') {
    return useStableCallback(
      throttle((...args) => fnRef.current(...args), wait, {
        leading: options?.leading ?? true,
        trailing: options?.trailing ?? true,
      }),
      [fnRef],
    );
  }
  return useStableCallback(((...args) => fnRef.current(...args)) as T, [fnRef]);
}

export default usePersistFn;
