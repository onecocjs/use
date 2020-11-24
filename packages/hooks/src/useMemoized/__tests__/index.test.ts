import { memo, useState } from 'react';
import useMemoized from '..';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useMemoized', function() {
  it('should not change', function() {
    const hooks = renderHook(() => useMemoized(() => ({})));
    const preValue = hooks.result.current;
    hooks.rerender();
    expect(hooks.result.current).toEqual(preValue);
  });

  it('should be change', function() {
    const hooks = renderHook(() => {
      const [value] = useState(false);
      const [count, updateChange] = useState(0);
      const memo = useMemoized(() => ({}), [value, count]);
      return { count, memo, updateChange: () => updateChange(count + 1) };
    });
    const {
      count: preCount,
      memo: preMemo,
      updateChange,
    } = hooks.result.current;
    expect(preCount).toEqual(0);
    act(updateChange);
    expect(hooks.result.current.count).toEqual(1);
    expect(preMemo).toEqual(hooks.result.current.memo);
    hooks.rerender();
    expect(preMemo).toEqual(hooks.result.current.memo);
  });
});
