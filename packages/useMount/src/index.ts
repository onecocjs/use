import useEffectOnce from '@onecocjs/use.effectonce';

function useMount(fn: () => void) {
  useEffectOnce(() => {
    fn();
  });
}

export default useMount;
