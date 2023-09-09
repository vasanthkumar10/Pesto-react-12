import React, { useState } from "react";

// initialValue = 0
export function CounterHooks({ count, setCount }) {
  // console.log("counter 1", props);
  // let [count, setCount] = useState(10);
  const [userInput, setUserInput] = useState(1);

  // const handleIncrement = (step = 1) => {
  // async process
  // setCount(count + userInput);
  // setCount(function (prevCount) {
  //   console.log("prev count", prevCount);
  //   return prevCount + 1;
  // });
  // setCount(function (prevCount) {
  //   console.log("prev count", prevCount);
  //   return prevCount + 1;
  // });
  // setCount(function (prevCount) {
  //   console.log("prev count", prevCount);
  //   return prevCount + 1;
  // });
  // setCount(function (prevCount) {
  //   console.log("prev count", prevCount);
  //   return prevCount + 1;
  // });
  // setCount(function (prevCount) {
  //   console.log("prev count", prevCount);
  //   return prevCount + 1;
  // });

  // setCount((prevCount) => prevCount + 1);
  // setCount((prevCount) => prevCount + 1);
  // setCount(count + 1);
  // setCount((prevCount) => prevCount + 1);
  //   setCount((prevCount) => prevCount + 1);

  //   console.log("count", count);
  // };

  const handleDecrement = (step = 1) => {
    setCount(count - step);
  };
  const handleIncrement = (step = 1) => {
    setCount(count + step);
  };
  return (
    <div>
      <h1>Hooks Counter - {count}</h1>
      <input
        type="number"
        value={userInput}
        onChange={(e) => {
          setUserInput(Number(e.target.value));
        }}
      />
      <button onClick={() => handleIncrement()}>increment 1 by 5 times</button>
      <button onClick={() => handleIncrement(5)}>increment by 5 </button>
      <button onClick={() => handleIncrement(10)}>increment by 10</button>
      <button onClick={() => handleIncrement(userInput)}>
        increment by user input
      </button>
      <button onClick={() => handleDecrement()}>decrement</button>
    </div>
  );
}

// stateful functional component
