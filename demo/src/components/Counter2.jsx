import React, { useState } from "react";

export function Counter2({ count, setCount }) {
  //   const [count, setCount] = useState(10);
  return (
    <div>
      <h1>The value of count is {count}</h1>
      <button onClick={() => setCount((prev) => prev + 5)}>
        incrementing count by 5
      </button>
    </div>
  );
}
