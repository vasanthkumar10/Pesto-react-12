import React, { useEffect, useState, useMemo } from "react";

export function Counter2() {
  const [count, setCount] = useState(10);
  const [age, setAge] = useState(3);

  const handleIncrement = () => {
    setCount((prev) => 10000000000);
    console.log("count", count);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  // normal fns also reload when state changes / page re-renders
  // useMemo -> optimisation hook
  const getFactorial = useMemo(() => {
    let factorial = 1;
    // for (let i = 1; i <= count; i++) {
    //   factorial *= i;
    // }
    // return factorial;
    // manually giving cpu load - > count
    console.log("calculating factorial");
    while (factorial <= count) {
      factorial++;
    }

    return count;
  }, [count]);

  return (
    <div>
      <h1>
        The value of count is {count} and factorial is {getFactorial}
      </h1>
      <button onClick={handleIncrement}>incrementing count by 1</button>
      <button onClick={handleDecrement}>incrementing count by 1</button>

      <h2>age - {age}</h2>
      <button onClick={() => setAge((prev) => prev + 1)}>increment age</button>
    </div>
  );
}
