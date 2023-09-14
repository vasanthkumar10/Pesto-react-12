import React, { useState, createContext } from "react";
import { ComponentA } from "./components/ComponentA";
import { ComponentD } from "./components/ComponentD";
import { BorderWrapper } from "./components/BorderWrapper";
import { Counter } from "./components/Counter";
import { Counter2 } from "./components/Counter2";
import { Axiosdemo } from "./components/Axiosdemo";

// global
export const CartContext = createContext();

function App() {
  const [cartCount, setCartCount] = useState({
    count: 0,
    brand: "flipkart",
  });

  return (
    <CartContext.Provider value={cartCount}>
      <div className="App">
        {/* <h2>App - {cartCount.count}</h2>

        <BorderWrapper color="red">
          <ComponentA />
          <ComponentD />
        </BorderWrapper>

        <button
          onClick={() =>
            setCartCount({ ...cartCount, count: cartCount.count + 1 })
          }
        >
          add to cart
        </button>

        <BorderWrapper>
          <h1>border text</h1>
          <p>this line is from app component and its a prop</p>
        </BorderWrapper> */}

        {/* <Counter />
        <Counter2 /> */}
        <Axiosdemo />
      </div>
    </CartContext.Provider>
  );
}

export default App;
