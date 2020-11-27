import { useRef, useEffect } from 'react';

interface Options {
  /** 是否立即执行一次 */
  immediate?: boolean;
}

function useInterval(fn: () => void, delay: number, options?: Options) {
  const fnRef = useRef<() => void>(fn);
  fnRef.current = fn;
  useEffect(() => {
    if (options?.immediate) {
      fnRef.current();
    }
    const timerId = setInterval(() => {
      fnRef.current();
    }, delay);
    return () => clearInterval(timerId);
  }, [delay]);
}

export default useInterval;
