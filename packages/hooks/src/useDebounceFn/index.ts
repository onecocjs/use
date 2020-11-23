import { useRef } from 'react';
import { debounce } from 'lodash';
import usePersistFn from '../usePersistFn';
import useMemoized from '../useMemoized';

interface UseDebounceFnOptions {
  leading?: boolean;
  trailing?: boolean;
}

function useDebounceFn<T extends (...args: any) => any>(
  fn: T,
  wait?: number,
  options?: UseDebounceFnOptions,
) {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;
  const run = useMemoized(
    () =>
      debounce<T>(
        ((...args) => {
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

export default useDebounceFn;
