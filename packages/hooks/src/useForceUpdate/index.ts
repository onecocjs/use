import { useState } from 'react';
import usePersistFn from '../usePersistFn';
function useForceUpdate() {
  const [, setCount] = useState(0);
  return usePersistFn(() => setCount(count => (count + 1) % 1_000_000));
}

export default useForceUpdate;
