import { useState } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useStableCallback } from "..";

describe("useStableCallback测试用例", function () {
  it("测试无依赖多次渲染的情况", function () {
    const hooks = renderHook(() => {
      const [count, setCount] = useState(0);
      const fn = useStableCallback(() => {}, []);
      return {
        fn,
        updateCount: () => setCount(count + 1),
      };
    });
    const preFn = hooks.result.current.fn;
    act(() => hooks.result.current.updateCount());
    expect((() => hooks.result.current.fn === preFn)()).toEqual(true);
    act(() => hooks.result.current.updateCount());
    expect((() => hooks.result.current.fn === preFn)()).toEqual(true);
  });
  it("测试有依赖，并且依赖多次更新的场景", function () {
    const hooks = renderHook(() => {
      const [count, setCount] = useState(0);
      const fn = useStableCallback(() => {}, [count]);
      return {
        fn,
        updateCount: () => setCount(count + 1),
      };
    });
    const preFn = hooks.result.current.fn;
    act(() => hooks.result.current.updateCount());
    expect((() => hooks.result.current.fn === preFn)()).toEqual(false);
    act(() => hooks.result.current.updateCount());
    expect((() => hooks.result.current.fn === preFn)()).toEqual(false);
  });
});
