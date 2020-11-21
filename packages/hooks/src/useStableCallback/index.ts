import useStableMemo from '../useStableMemo';

function useStableCallback<T extends (...args: any[]) => any, DEP>(
  func: T,
  deps?: DEP[],
) {
  return useStableMemo(() => func, deps);
}

export default useStableCallback;
