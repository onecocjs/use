import { times } from 'lodash';
import usePersistFn from '..';
import { renderHook, act } from '@testing-library/react-hooks';

describe('usePersistFn', function() {
  jest.useFakeTimers();
  it('should same function address', function() {
    const callback = jest.fn();
    const hooks = renderHook(() => {
      const fn = usePersistFn(callback);
      return fn;
    });
    const preFn = hooks.result.current;
    act(hooks.result.current);
    hooks.rerender();
    expect(hooks.result.current).toEqual(preFn);
    hooks.rerender();
    hooks.rerender();
    expect(hooks.result.current).toEqual(preFn);
  });
  it('should debounce', function() {
    const callback = jest.fn();
    const hooks = renderHook(() =>
      usePersistFn(callback, {
        action: 'debounce',
        wait: 20,
      }),
    );
    expect(callback).not.toBeCalled();
    act(() => {
      times(100, () => {
        hooks.result.current();
      });
    });

    jest.runAllTimers();
    hooks.rerender();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should throttle', function() {
    const callback = jest.fn();
    const hooks = renderHook(() =>
      usePersistFn(callback, {
        action: 'throttle',
        wait: 20,
      }),
    );
    expect(callback).not.toBeCalled();
    act(() => {
      hooks.result.current();
      hooks.result.current();
    });
    hooks.rerender();
    expect(callback).toHaveBeenCalledTimes(1);
    act(() => {
      hooks.result.current();
      hooks.result.current();
    });
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(2);
    act(() => {
      hooks.result.current();
      hooks.result.current();
    });

    expect(callback).toHaveBeenCalledTimes(3);
  });
});
