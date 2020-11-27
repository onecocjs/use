import useEffectOnce from '@onecocjs/use.effectonce';

function useUnmount(fn: () => void) {
  useEffectOnce(() => {
    return fn;
  });
}

export default useUnmount;
