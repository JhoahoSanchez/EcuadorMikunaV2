import React, { useState } from "react";
import { ProductList } from "../components/ProductList";
import ProductDisplay from "../components/ProductDisplay";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <ProductList onProductsFetched={setProducts} />
      <ProductDisplay products={products} />
    </div>
  );
};

export default ProductPage;
