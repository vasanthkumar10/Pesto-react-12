import React, { useContext } from "react";
import { CartContext } from "../App";

export function ComponentD() {
  const { count, brand } = useContext(CartContext);
  console.log("rerendering D");

  return (
    <div>
      <h1>
        ComponentD - {count} {brand}
      </h1>
    </div>
  );
}
