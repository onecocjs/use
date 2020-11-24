import { act, renderHook } from '@testing-library/react-hooks';
import useTimeout from '..';

describe('useTimeout', function() {
  jest.useFakeTimers();
  it('should work', function() {
    const callback = jest.fn();
    renderHook(() => useTimeout(callback, 20));
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(30);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
