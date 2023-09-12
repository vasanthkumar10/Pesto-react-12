// JSX -> javascript XML code -> JS + HTML -> creates a component
import React, { useState } from "react";
import { Welcome } from "./components/Welcome";
import { Counter } from "./components/Counter";
import { CounterHooks } from "./components/CounterHooks";
import { Navbar } from "./components/Navbar";
import { User } from "./components/User";
import { Counter2 } from "./components/Counter2";
import { Post } from "./components/Post";
import { Login } from "./components/Login";

export function App() {
  // const [count, setCount] = useState(10);
  return (
    <div>
      {/* <h2>App - Parent component</h2> */}
      {/* <Welcome name="Abi" age="10" />
      <Welcome name="Ankit" age="30" />
      <Welcome name="Aizen" age="5" /> */}
      {/* <Counter /> */}
      {/* <CounterHooks count={count} setCount={setCount} /> */}
      {/* <Counter2 /> */}
      {/* <button onClick={() => setCount((prev) => prev + 1)}>
        parent increment button
      </button> */}
      {/* <Navbar />
      <Navbar /> */}
      {/* <User /> */}
      {/* <Post /> */}
      <Login />
    </div>
  );
}

// named export
// module.exports = {
//   App,
// };
