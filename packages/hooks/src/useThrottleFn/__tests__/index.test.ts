import { renderHook, act } from '@testing-library/react-hooks';
import useThrottleFn from '..';

describe('useThrottleFn', function() {
  jest.useFakeTimers();
  it('xx', function() {
    const callback = jest.fn();
    const hooks = renderHook(() => {
      return useThrottleFn(callback, 1000);
    });
    expect(callback).not.toBeCalled();
    act(() => {
      hooks.result.current();
      hooks.result.current();
      hooks.result.current();
    });
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
