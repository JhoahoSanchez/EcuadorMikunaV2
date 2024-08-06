import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProductList = ({ onProductsFetched }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5255/api/product/getAll"
      );
      if (response.status === 200) {
        setProducts(response.data);
        if (onProductsFetched) {
          onProductsFetched(response.data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  /*
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );*/
};
