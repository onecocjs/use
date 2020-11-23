import useEffectOnce from '../useEffectOnce';

function useUnmount(fn: () => void) {
  useEffectOnce(() => {
    return fn;
  });
}

export default useUnmount;
