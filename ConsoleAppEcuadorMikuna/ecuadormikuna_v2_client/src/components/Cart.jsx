import { useState } from "react";
import React from "react";

const Cart = () => {
  const [cart, setCart] = useState({
    userId: null,
    items: [],
  });

  const addProductToCart = (product) => {
    // Obtener el carrito actual desde sessionStorage
    let currentCart = JSON.parse(sessionStorage.getItem("cart")) || {};

    // Verificar si el producto ya está en el carrito
    if (currentCart[product.id]) {
      // Si ya está, incrementar la cantidad
      currentCart[product.id].quantity += 1;
    } else {
      // Si no está, agregarlo con cantidad 1
      currentCart[product.id] = {
        ...product,
        quantity: 1,
      };
    }

    // Actualizar el estado del carrito en React
    setCart(currentCart);

    // Actualizar el carrito en sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(currentCart));
  };
};

export default Cart;
