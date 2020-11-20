import { EffectCallback, useEffect } from "react";

export function useEffectOnce(effectFn: EffectCallback) {
  useEffect(effectFn, []);
}
