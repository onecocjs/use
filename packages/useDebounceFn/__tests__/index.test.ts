import useDebounceFn from '../src';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useDebounceFn', function() {
  jest.useFakeTimers();
  it('should be defined', () => {
    expect(useDebounceFn).toBeDefined();
  });

  it('debounce func run  、 cancel 、 flush', function() {
    const callback = jest.fn();
    const hooks = renderHook(() => useDebounceFn(callback, 20));
    expect(callback).not.toBeCalled();
    act(hooks.result.current);
    act(hooks.result.current);
    act(hooks.result.current);
    jest.runAllTimers();
    expect(callback).toBeCalledTimes(1);
    act(() => {
      hooks.result.current();
      hooks.result.current.cancel();
    });
    jest.runAllTimers();
    expect(callback).toBeCalledTimes(1);
    act(() => {
      hooks.result.current();
      hooks.result.current.flush();
    });
    expect(callback).toBeCalledTimes(2);
  });
});
