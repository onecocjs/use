import { useRef } from "react";

type OrUndefined<T> = T | undefined;

const is = <T>(nextDeps: T[], prevDeps: T[]) =>
  nextDeps.every((_, i) => Object.is(nextDeps[i], prevDeps[i]));

export function useStableMemo<T, DEP>(createFn: () => T, deps?: DEP[]) {
  const valueRef = useRef<OrUndefined<T>>(undefined);
  const depsRef = useRef<OrUndefined<DEP[]>>(undefined);
  if (depsRef.current && deps) {
    if (is(deps, depsRef.current)) {
      return valueRef.current;
    }
  }
  valueRef.current = createFn();
  depsRef.current = deps;
  return valueRef.current;
}
