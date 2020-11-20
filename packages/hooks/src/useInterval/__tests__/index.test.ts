import useInterval from "..";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useInterval", () => {
  jest.useFakeTimers();
  it("should be defined", () => {
    expect(useInterval).toBeDefined();
  });

  it("interval should work", () => {
    const callback = jest.fn();
    renderHook(() => useInterval(callback, { delay: 20 }));
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(70);
    expect(callback).toHaveBeenCalledTimes(3);
  });
  it("interval should immediate work", () => {
    const callback = jest.fn();
    renderHook(() => useInterval(callback, { delay: 20, immediate: true }));
    expect(callback).toBeCalled();
    jest.advanceTimersByTime(70);
    expect(callback).toHaveBeenCalledTimes(4);
  });
});
