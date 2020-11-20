import { useState, useCallback } from "react";
import { usePersistFn } from "..";
import { renderHook, act } from "@testing-library/react-hooks";

describe("usePersistFn测试用例", function () {
  it("ce", function () {
    const hooks = renderHook(() => {
      const [state, setState] = useState(0);

      const fn = usePersistFn((name: string) => {
        console.log("hello" + name);
        return "xx";
      });

      return {
        updateState: () => setState(state + 1),
        fn,
      };
    });
    const preFn = hooks.result.current.fn;

    act(hooks.result.current.updateState);
    act(() => preFn("xx"));
    expect(hooks.result.current.fn).toEqual(preFn);
  });
});

function h<T, R>(...args: T[]): R {
  console.log("hello" + name);
  return null;
}

const res = h("name");

type Fn = <T, R>(...args: T[]) => R | void;
type t = typeof h;

type res = t extends Fn ? 1 : 2;
