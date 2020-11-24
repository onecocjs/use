import { useEffect, useRef } from 'react';

function useTimeout(fn: Function, delay: number) {
  const callback = useRef(fn);

  callback.current = fn;

  useEffect(() => {
    const timer = setTimeout(() => {
      callback.current();
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);
}

export default useTimeout;
