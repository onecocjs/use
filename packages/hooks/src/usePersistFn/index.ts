import { useRef } from "react";
import { useStableCallback, Fn } from "../useStableCallback";

export function usePersistFn<T extends Fn>(fn: T) {
  const fnRef = useRef<T>(fn);

  fnRef.current = fn;

  return useStableCallback(((...args) => fnRef.current(...args)) as T, [fnRef]);
}
