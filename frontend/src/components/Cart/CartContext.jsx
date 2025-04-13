import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item =>
        item.productID === product.productID &&
        item.size === product.size &&
        item.color === product.color
      );

      if (existingItem) {
        return prevItems.map(item =>
          item === existingItem
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevItems, product];
    });
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(prevItems =>
      prevItems.filter(item => !(
        item.productID === productToRemove.productID &&
        item.size === productToRemove.size &&
        item.color === productToRemove.color
      ))
    );
  };

  const updateQuantity = (productToUpdate, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.productID === productToUpdate.productID &&
        item.size === productToUpdate.size &&
        item.color === productToUpdate.color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);