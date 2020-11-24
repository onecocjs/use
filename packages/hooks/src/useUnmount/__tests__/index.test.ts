import { renderHook, act } from '@testing-library/react-hooks';
import useUnmount from '..';

describe('useUnmount', function() {
  it('should work', function() {
    const callback = jest.fn();
    const hooks = renderHook(() => useUnmount(callback));
    expect(callback).not.toBeCalled();
    hooks.unmount();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
