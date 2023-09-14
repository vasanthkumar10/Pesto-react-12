import React, { useState, useReducer } from "react";
import { INITIAL_STATE, reducer } from "../utils/constants";

export function Counter2() {
  const [count2Obj, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <h1>Count2 - {count2Obj.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 2 })}>
        increment by 2
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 2 })}>
        decrement by 2
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset2</button>
    </div>
  );
}
