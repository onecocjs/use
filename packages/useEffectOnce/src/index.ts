import { EffectCallback, useEffect } from 'react';

function useEffectOnce(effectFn: EffectCallback) {
  useEffect(effectFn, []);
}

export default useEffectOnce;
