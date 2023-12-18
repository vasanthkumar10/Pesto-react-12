// JSX -> javascript XML code -> JS + HTML -> creates a component
import React, { useState } from "react";

import { Counter } from "./components/Counter";
import { Counter2 } from "./components/Counter2";
import { CounterHooks } from "./components/CounterHooks";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Post } from "./components/Post";
import TaskManager from "./components/TaskManager";
import TransactionList from "./components/TransactionList";
import { User } from "./components/User";
import { Welcome } from "./components/Welcome";

export function App() {
  const [count, setCount] = useState(10);
  const transactions = [
    { description: "Salary", amount: 3000, type: "income" },
    { description: "Rent", amount: 1200, type: "expense" },
    { description: "Groceries", amount: 200, type: "expense" },
    { description: "Bonus", amount: 500, type: "income" },
    { description: "Utilities", amount: 150, type: "expense" },
  ];

  return (
    <div>
      {/* <h2>App - Parent component</h2> */}
      {/* <Welcome name="Abi" age="10" />
      <Welcome name="Ankit" age="30" />
      <Welcome name="Aizen" age="5" /> */}
      {/* <Counter />
      <CounterHooks count={count} setCount={setCount} /> */}
      {/* <Counter2 /> */}
      {/* <button onClick={() => setCount((prev) => prev + 1)}>
        parent increment button
      </button> */}
      {/* <Navbar />
      <Navbar /> */}
      {/* <User /> */}
      {/* <Post /> */}
      {/* <Login />
      <TaskManager /> */}
      <TransactionList transactions={transactions} />
    </div>
  );
}

// named export
// module.exports = {
//   App,
// };
