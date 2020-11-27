import { useRef } from 'react';
import usePersistFn from '@onecocjs/use.persistfn';

function useLockFn<T extends (...args: any[]) => Promise<any>>(fn: T) {
  const lockRef = useRef(false);

  return usePersistFn((async (...args: any[]) => {
    if (lockRef.current) {
      return;
    }
    lockRef.current = true;
    try {
      const res = await fn(...args);
      lockRef.current = false;
      return res;
    } catch (e) {
      lockRef.current = false;
      throw e;
    }
  }) as T);
}

export default useLockFn;
