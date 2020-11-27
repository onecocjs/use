import { useState } from 'react';
import usePersistFn from '@onecocjs/use.persistfn';

type State = boolean | number | string;

function useToggle<D extends State, R extends State>(
  defaultValue: D,
  reverseValue: R,
) {
  const [state, updateState] = useState<D | R>(defaultValue);

  const toggle = usePersistFn((value?: D | R) => {
    const nextValue = state === defaultValue ? reverseValue : defaultValue;
    if (value === undefined) {
      updateState(nextValue);
    } else {
      updateState(value);
    }
  });

  return { state, toggle };
}

export default useToggle;
