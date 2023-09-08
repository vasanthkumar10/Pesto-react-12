// JSX -> javascript XML code -> JS + HTML -> creates a component
import React from "react";
import { Welcome } from "./components/Welcome";
import { Counter } from "./components/Counter";
import { CounterHooks } from "./components/CounterHooks";

export function App() {
  return (
    <div>
      {/* <h2>App - Parent component</h2> */}
      {/* <Welcome name="Abi" age="10" />
      <Welcome name="Ankit" age="30" />
      <Welcome name="Aizen" age="5" /> */}
      <Counter />
      <CounterHooks />
    </div>
  );
}

// named export
// module.exports = {
//   App,
// };
