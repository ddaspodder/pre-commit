import { useState } from "react";

function useCounter(initialCount = 0, value = 1) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  return { count, increment, decrement };
}

export default useCounter;
