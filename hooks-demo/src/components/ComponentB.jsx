import React, { useContext } from "react";
import { ComponentC } from "./ComponentC";
import { CartContext } from "../App";

export function ComponentB() {
  const { count } = useContext(CartContext);
  console.log("rerendering B");

  return (
    <div>
      <h1>Component B - {count}</h1>
      <ComponentC />
    </div>
  );
}
