import { useStableMemo } from "../useStableMemo";

export type Fn = <T, R>(...args: T[]) => R | void;

export function useStableCallback<T extends Fn, DEP>(func: T, deps?: DEP[]) {
  return useStableMemo(() => func, deps);
}
