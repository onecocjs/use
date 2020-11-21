import { useRef, useEffect } from 'react';

interface Options {
  delay: number;
  immediate?: boolean;
}

function useInterval(fn: () => void, options: Options) {
  const { delay, immediate } = options;
  const fnRef = useRef<() => void>(() => {});
  fnRef.current = fn;
  useEffect(() => {
    if (immediate) {
      fnRef.current?.();
    }
    const timerId = setInterval(() => {
      fnRef.current?.();
    }, delay);
    return () => clearInterval(timerId);
  }, [delay]);
}

export default useInterval;
