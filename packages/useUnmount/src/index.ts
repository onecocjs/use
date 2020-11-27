import useEffectOnce from '../../useEffectOnce/lib';

function useUnmount(fn: () => void) {
  useEffectOnce(() => {
    return fn;
  });
}

export default useUnmount;
