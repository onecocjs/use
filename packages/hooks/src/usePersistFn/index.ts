import { useRef } from "react";
import useStableCallback from "../useStableCallback";

function usePersistFn<T extends Function>(fn: T) {
  const fnRef = useRef<T>(fn);

  fnRef.current = fn;

  return useStableCallback((...args) => fnRef.current(...args), [fnRef]);
}

export default usePersistFn;
