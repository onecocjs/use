import { useRef, useEffect } from "react";
import { useStableCallback, Fn } from "../useStableCallback";
//TODO
export function usePersistFn<T extends Fn, DEP>(fn: T, deps?: DEP[]) {
  const fnRef = useRef<T>(fn);
  return useStableCallback(
    (...args) => {
      return fnRef.current(args);
    },
    [fnRef]
  );
}
