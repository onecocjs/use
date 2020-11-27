declare type State = boolean | number | string;
declare function useToggle<D extends State, R extends State>(
  defaultValue: D,
  reverseValue: R,
): {
  state: D | R;
  toggle: (value?: D | R) => void;
};
export default useToggle;
