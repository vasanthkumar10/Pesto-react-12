import React, { useState, useReducer } from "react";
// import { INITIAL_STATE, reducer } from "../utils/constants";
import { useCounter } from "../hooks/useCounter";

export function Counter() {
  //   const [countObj, dispatch] = useReducer(reducer, INITIAL_STATE);
  //   console.log(countObj);
  const [count, increment, decrement, reset] = useCounter(0, 10, 5, 100);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>

      {/* <h1>Count - {countObj.count}</h1>
      <input
        type="number"
        value={countObj.input}
        onChange={(e) =>
          dispatch({ type: "INPUT", value: Number(e.target.value) })
        }
      />
      <button
        onClick={() => dispatch({ type: "INCREMENT", value: countObj.input })}
      >
        increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT", value: countObj.input })}
      >
        decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button> */}
    </div>
  );
}
