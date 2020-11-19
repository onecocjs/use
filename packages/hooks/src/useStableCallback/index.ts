import { useStableMemo } from "../useStableMemo";

type Fn = <T, R>(...args: T[]) => R | void;

export function useStableCallback<T extends Fn, DEP>(func: T, deps?: DEP[]) {
  return useStableMemo(() => func, deps);
}
