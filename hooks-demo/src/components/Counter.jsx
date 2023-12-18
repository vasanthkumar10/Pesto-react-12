import { INITIAL_STATE, reducer } from "../utils/constants";

import { useCounter } from "../hooks/useCounter";
// import React, { useReducer, useState } from "react";

// export const INITIAL_STATE = {
//   count: 0,
//   input: 0,
// };

// export const reducer = (state = INITIAL_STATE, action) => {
//   //   console.log("state", state, "action", action);
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + action.value };
//     case "DECREMENT":
//       return { ...state, count: state.count - action.value };
//     case "RESET":
//       return INITIAL_STATE;
//     case "INPUT":
//       return { ...state, input: action.value };
//     default:
//       return state;
//   }
// };

export function Counter() {
  // const [countObj, dispatch] = useReducer(reducer, INITIAL_STATE);
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
