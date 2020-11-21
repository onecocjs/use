import { useEffect, useRef } from 'react';
import usePersistFn from '../usePersistFn';

export type UseTimeoutReturn = [() => boolean | null, () => void, () => void];

export interface Options {
  delay: number;
  manual?: boolean;
}

export default function useTimeout(
  fn: Function,
  options: Options,
): UseTimeoutReturn {
  const ready = useRef<boolean | null>(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const callback = useRef(fn);
  callback.current = fn;

  const isReady = usePersistFn(() => ready.current);

  const run = usePersistFn(() => {
    ready.current = false;
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      ready.current = true;
      callback.current();
    }, options.delay);
  });

  const cancel = usePersistFn(() => {
    ready.current = null;
    timeout.current && clearTimeout(timeout.current);
  });

  useEffect(() => {
    if (options.manual) {
      run();
      return cancel;
    }
  }, [options.delay]);

  return [isReady, cancel, run];
}
