import useStableMemo from "../useStableMemo";

function useStableCallback<T extends Function, DEP>(func: T, deps?: DEP[]) {
  return useStableMemo(() => func, deps);
}

export default useStableCallback;
