import { useRef } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useForceUpdate from '../src';
import usePersistFn from '@onecocjs/use.persistfn';

describe('useUpdate', () => {
  it('should update', () => {
    const hooks = renderHook(() => {
      const ref = useRef(0);

      const update = useForceUpdate();

      return {
        update,
        count: ref.current,
        onChange: usePersistFn(() => {
          ref.current = ref.current + 1;
          update();
        }),
      };
    });
    expect(hooks.result.current.count).toEqual(0);
    act(hooks.result.current.onChange);
    expect(hooks.result.current.count).toEqual(1);
  });
  it('should return same update function', () => {
    const hooks = renderHook(() => useForceUpdate());
    const preUpdate = hooks.result.current;
    hooks.rerender();
    expect(hooks.result.current).toEqual(preUpdate);
  });
});
