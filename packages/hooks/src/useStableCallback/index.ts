import { useStableMemo } from "../useStableMemo";

export type Fn = (...args: any[]) => any;

export function useStableCallback<T extends Fn, DEP>(func: T, deps?: DEP[]) {
  return useStableMemo(() => func, deps);
}
