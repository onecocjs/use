import useToggle from '@onecocjs/use.toggle';

function useBoolean() {
  return useToggle(false, true);
}

export default useBoolean;
