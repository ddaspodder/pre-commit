import { renderHook, waitFor } from "@testing-library/react";
import useCounter from "./CustomHook";

test("increment", async () => {
  const {
    result: {
      current: { count, increment, decrement },
    },
  } = renderHook(() => useCounter(0));

  expect(count).toEqual(0);
  increment();
  waitFor(() => {
    expect(count).toEqual(1);
  }, {timeout:1000});
});
