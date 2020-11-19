import { useRef, useEffect } from "react";

export function usePersistFn<T>(fn: T) {
  const fnRef = useRef<T>(fn);
}
