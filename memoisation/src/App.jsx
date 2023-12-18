import "./App.css";

import { useEffect, useMemo, useState } from "react";

import Product from "./components/Product";
import { productData } from "./products";

function App() {
  const [products, setProducts] = useState([]);
  const [age, setAge] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productData();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const getProducts = useMemo(() => {
    return products.map(({ id, name }) => {
      return <Product key={id} id={id} name={name} />;
    });
  }, [products]);

  return (
    <div className="App">
      <h1>Age = {age}</h1>
      <button onClick={() => setAge(age + 1)}>increment</button>
      {getProducts}
    </div>
  );
}

export default App;
