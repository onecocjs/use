import { useRef } from 'react';
import useLockFn from '../src';
import { renderHook, act } from '@testing-library/react-hooks';

const deloy = (ms: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, ms));

describe('useLockFn', function() {
  it('should work', async () => {
    const hook = renderHook(() => {
      const countRef = useRef(0);
      const locked = useLockFn(async (step: number) => {
        countRef.current += step;
        await deloy(50);
      });

      return {
        locked,
        countRef,
      };
    });
    const { locked, countRef } = hook.result.current;
    locked(1);
    expect(countRef.current).toBe(1);
    locked(2);
    expect(countRef.current).toBe(1);
    await deloy(30);
    locked(3);
    expect(countRef.current).toBe(1);
    await deloy(30);
    locked(4);
    expect(countRef.current).toBe(5);
    locked(5);
    expect(countRef.current).toBe(5);
  });
});
