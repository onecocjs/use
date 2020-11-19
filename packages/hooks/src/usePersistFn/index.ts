import { useRef, useEffect } from "react";
import { useStableMemo } from "../useStableMemo";

export function usePersistFn<T>(fn: T) {
  const fnRef = useRef<T>(fn);
}
