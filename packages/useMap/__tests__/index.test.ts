import useMap from '../src';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useMap', function() {
  it('should defined', function() {
    expect(useMap).toBeDefined();
  });

  it('test null initial', function() {
    const hooks = renderHook(() => {
      return useMap();
    });
    expect(hooks.result.current.mapState.size).toEqual(0);
    act(() => {
      hooks.result.current.set('name', 'zs');
    });
    expect(hooks.result.current.mapState.size).toEqual(1);
    expect(hooks.result.current.get('name')).toEqual('zs');
  }),
    it('should render', function() {
      const hooks = renderHook(() => {
        return useMap([['name', 'zs']]);
      });
      const preMap = hooks.result.current.mapState;
      expect(hooks.result.current.get('name')).toEqual('zs');
      act(() => {
        hooks.result.current.set('name', 'zs1');
      });
      expect(hooks.result.current.get('name')).toEqual('zs1');
      expect(hooks.result.current.mapState).toEqual(preMap);
      act(() => {
        hooks.result.current.set('age', '12');
      });
      expect(hooks.result.current.get('age')).toEqual('12');
      expect(hooks.result.current.mapState).toEqual(preMap);
      act(() => {
        hooks.result.current.del('age');
      });
      expect(hooks.result.current.mapState).toEqual(preMap);
      expect(hooks.result.current.get('age')).toBeUndefined();
      expect(hooks.result.current.mapState.size).toEqual(1);
      act(() => {
        hooks.result.current.reset();
      });
      expect(hooks.result.current.mapState).not.toEqual(preMap);
      expect(hooks.result.current.get('name')).toEqual('zs');
    });
});
