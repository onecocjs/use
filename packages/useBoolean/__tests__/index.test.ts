import useBoolean from '../src';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useToggle', function() {
  it('should define', function() {
    expect(useBoolean).toBeDefined();
  });
  it('should switch toggle', function() {
    const hooks = renderHook(() => useBoolean());
    expect(hooks.result.current.state).toEqual(false);
    act(hooks.result.current.toggle);
    expect(hooks.result.current.state).toEqual(true);
    act(() => hooks.result.current.toggle(false));
    expect(hooks.result.current.state).toEqual(false);
  });
});
