import { useRef } from 'react';

const is = <T>(nextDeps: T[], prevDeps: T[]) =>
  nextDeps.every((_, i) => Object.is(nextDeps[i], prevDeps[i]));

function useStableMemo<T, DEP>(createFn: () => T, deps?: DEP[]) {
  const valueRef = useRef<T | undefined>(undefined);
  const depsRef = useRef<DEP[] | undefined>(undefined);
  if (depsRef.current && deps) {
    if (is(deps, depsRef.current)) {
      return valueRef.current as T;
    }
  }
  valueRef.current = createFn();
  depsRef.current = deps;
  return valueRef.current as T;
}

export default useStableMemo;
