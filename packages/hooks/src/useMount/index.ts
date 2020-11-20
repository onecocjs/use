import useEffectOnce from "../useEffectOnce";

function useMount(fn: () => void) {
  useEffectOnce(() => {
    fn();
  });
}

export default useMount;
