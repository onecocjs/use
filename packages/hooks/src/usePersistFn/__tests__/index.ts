import { useState } from "react";
import usePersistFn from "..";
import { renderHook, act } from "@testing-library/react-hooks";

describe("usePersistFn测试用例", function () {
  it("ce", function () {
    const hooks = renderHook(() => {
      const [state, setState] = useState(0);

      const fn = usePersistFn((name: string) => {
        console.log("hello" + name);
        return "xx";
      });

      return { state, updateState: () => setState(state + 1), fn };
    });
    const preFn = hooks.result.current.fn;

    act(hooks.result.current.updateState);
    act(() => {
      preFn("xx");
    });
    expect(hooks.result.current.fn).toEqual(preFn);
    act(hooks.result.current.updateState);
    act(hooks.result.current.updateState);
    act(hooks.result.current.updateState);
    expect(hooks.result.current.fn).toEqual(preFn);
    expect(hooks.result.current.state).toEqual(4);
  });
});
