import { useRef } from 'react';

function usePrevious<T>(state: T): T {
  const currState = useRef<T>(state);
  const prevState = useRef<T>(state);

  prevState.current = currState.current;
  currState.current = state;

  return prevState.current;
}

export default usePrevious;
