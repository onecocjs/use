declare function useMap<K, V>(
  initialState?: [K, V][],
): {
  set: (key: K, value: V) => Map<K, V>;
  get: (key: K) => V;
  del: (key: K) => Map<K, V>;
  reset: () => Map<K, V>;
  mapState: Map<K, V>;
};
export default useMap;
