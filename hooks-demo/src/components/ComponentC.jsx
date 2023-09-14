import React, { useContext } from "react";
import { CartContext } from "../App";

export function ComponentC() {
  const { brand } = useContext(CartContext);
  console.log("rerendering C");
  return (
    <div>
      <h1>Component C brand - {brand} </h1>
    </div>
  );
}
