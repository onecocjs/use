import {
  useEffectOnce,
  useForceUpdate,
  useInterval,
  useBoolean,
  useDebounceFn,
  useLockFn,
  useMap,
  useMemoized,
  useMount,
  usePersistFn,
  useTimeout,
  useToggle,
  useUnmount,
  usePrevious,
  useThrottleFn,
} from '../src';

describe('use', function() {
  it('should define useEffectOnce', function() {
    expect(useEffectOnce).toBeDefined();
  });
  it('should define useForceUpdate', function() {
    expect(useForceUpdate).toBeDefined();
  });
  it('should define useMap', function() {
    expect(useMap).toBeDefined();
  });
  it('should define useMemoized', function() {
    expect(useMemoized).toBeDefined();
  });
  it('should define useInterval', function() {
    expect(useInterval).toBeDefined();
  });
  it('should define useBoolean', function() {
    expect(useBoolean).toBeDefined();
  });
  it('should define useDebounceFn', function() {
    expect(useDebounceFn).toBeDefined();
  });
  it('should define useLockFn', function() {
    expect(useLockFn).toBeDefined();
  });
  it('should define useMount', function() {
    expect(useMount).toBeDefined();
  });
  it('should define usePersistFn', function() {
    expect(usePersistFn).toBeDefined();
  });
  it('should define useTimeout', function() {
    expect(useTimeout).toBeDefined();
  });
  it('should define useToggle', function() {
    expect(useToggle).toBeDefined();
  });
  it('should define useUnmount', function() {
    expect(useUnmount).toBeDefined();
  });
  it('should define usePrevious', function() {
    expect(usePrevious).toBeDefined();
  });
  it('should define useThrottleFn', function() {
    expect(useThrottleFn).toBeDefined();
  });
});
