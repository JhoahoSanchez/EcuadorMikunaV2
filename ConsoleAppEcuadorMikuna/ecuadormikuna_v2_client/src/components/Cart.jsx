import { useState } from "react";
import React from "react";

export const Cart = () => {
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

  const removeProductFromCart = (productId) => {
    setCart((prevCart) => {
      // Filtra los productos que no coinciden con el productId a remover
      const updatedItems = prevCart.items.filter(
        (item) => item.productId !== productId
      );

      // Retorna un nuevo carrito con los items actualizados
      return {
        ...prevCart,
        items: updatedItems,
      };
    });
  };

  return {
    cart,
    addProductToCart,
    removeProductFromCart,
  };
};
