import usePersistFn from '..';
import { renderHook, act } from '@testing-library/react-hooks';

describe('usePersistFn', function() {
  jest.useFakeTimers();
  it('should same function address', function() {
    const callback = jest.fn();
    const hooks = renderHook(() => usePersistFn(callback));
    const preFn = hooks.result.current;
    act(hooks.result.current);
    hooks.rerender();
    expect(hooks.result.current).toEqual(preFn);
    hooks.rerender();
    hooks.rerender();
    expect(hooks.result.current).toEqual(preFn);
  });
});
