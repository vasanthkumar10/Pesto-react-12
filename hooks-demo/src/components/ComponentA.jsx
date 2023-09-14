import React from "react";
import { ComponentB } from "./ComponentB";

export function ComponentA() {
  console.log("rerendering A");
  return (
    <div>
      <h1>Component A</h1>
      <ComponentB />
    </div>
  );
}
