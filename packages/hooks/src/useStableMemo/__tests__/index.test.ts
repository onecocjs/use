import { renderHook, act } from "@testing-library/react-hooks";
import { useState } from "react";
import { useStableMemo } from "..";

function hooksOfTest() {
  const [count, setCount] = useState(0);
  const data = useStableMemo(
    () => ({
      name: "张三",
    }),
    []
  );

  return { data, updateCount: () => setCount(count + 1) };
}

function hooksOfTestHasDeps() {
  const [count, setCount] = useState(0);
  const data = useStableMemo(
    () => ({
      name: "张三",
    }),
    [count]
  );

  return { data, updateCount: () => setCount(count + 1) };
}

describe("稳定的useMemo测试用例", function () {
  it("测试无依赖多次渲染的场景下", function () {
    const hooks = renderHook(hooksOfTest);
    const preData = hooks.result.current.data;
    act(hooks.result.current.updateCount);
    expect((() => hooks.result.current.data === preData)()).toEqual(true);
    act(hooks.result.current.updateCount);
    expect((() => hooks.result.current.data === preData)()).toEqual(true);
  });
  it("测试有依赖，并且依赖项更新渲染", function () {
    const hooks = renderHook(hooksOfTestHasDeps);
    const preData = hooks.result.current.data;
    act(hooks.result.current.updateCount);
    expect((() => hooks.result.current.data === preData)()).toEqual(false);
    act(hooks.result.current.updateCount);
    expect((() => hooks.result.current.data === preData)()).toEqual(false);
  });
});
