import { useState } from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import useTimeout from '..';

describe('useTimeout', function() {
  jest.useFakeTimers();
  it('should work', function() {
    const callback = jest.fn();
    renderHook(() => useTimeout(callback, { delay: 20 }));
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(30);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  it('should manual', function() {
    const callback = jest.fn();
    const hooks = renderHook(() =>
      useTimeout(callback, { delay: 20, manual: true }),
    );
    expect(callback).not.toBeCalled();
    expect(hooks.result.current.isReady()).toBeFalsy();
    jest.advanceTimersByTime(30);
    expect(callback).not.toBeCalled();
    act(hooks.result.current.run);
    act(hooks.result.current.run);
    jest.advanceTimersByTime(30);
    expect(hooks.result.current.isReady()).toBeTruthy();
    expect(callback).toHaveBeenCalledTimes(1);
  });
  it('should cancel not work', function() {
    const callback = jest.fn();
    const hooks = renderHook(() => useTimeout(callback, { delay: 20 }));
    expect(hooks.result.current.isReady()).toBeFalsy();
    expect(callback).not.toBeCalled();
    act(hooks.result.current.cancel);
    expect(hooks.result.current.isReady()).toBeNull();
    jest.advanceTimersByTime(300);
    expect(callback).not.toBeCalled();
  });
});
