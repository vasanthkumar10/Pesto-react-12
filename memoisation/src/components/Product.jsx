import React from "react";

function Product({ id, name }) {
  console.log("rendering child");
  return (
    <div>
      <h2>
        {id} - {name}
      </h2>
    </div>
  );
}

export default Product;
