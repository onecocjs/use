import { useState } from "react";
import useMount from "..";
import { renderHook, act } from "@testing-library/react-hooks";

describe("测试只执行一次effect的用例", function () {
  it("测试", function () {
    const hooks = renderHook(() => {
      const [count, setCount] = useState(0);
      const [loading, setLoading] = useState(0);
      useMount(() => {
        setLoading(loading + 1);
      });
      return {
        loading,
        updateCount: () => setCount(count + 1),
        count,
      };
    });
    expect(hooks.result.current.loading).toEqual(1);
    expect(hooks.result.current.count).toEqual(0);
    act(hooks.result.current.updateCount);
    act(hooks.result.current.updateCount);
    act(hooks.result.current.updateCount);
    expect(hooks.result.current.loading).toEqual(1);
    expect(hooks.result.current.count).toEqual(3);
  });
});
