import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        if (localStorage.getItem('itemsCart') !== null) {
          setCart(JSON.parse(localStorage.getItem('itemsCart')));
        }
      }, []);
    

      useEffect(() => {
        localStorage.setItem('itemsCart', JSON.stringify(cart));
      }, [cart]);
    
      const addItem = (item, quantity) => {
        if (cart.filter((element) => element.id === item.id).length === 0) {
          setCart([
            ...cart,
            {
              id: item.id,
              title: item.title,
              img: item.imgUrl,
              price: item.price,
              quantity: quantity,
            },
          ]);
        } else {
          alert(
            'El producto' + item.title + ' ya se encuentra en tu carrito.'
          );
        }
      };
    
      const removeItem = (id) => {
        let cartWithoutIt = cart.filter((element) => element.id !== id);
        setCart(cartWithoutIt);
      };
    
      const clearAll = () => setCart([]);
    
      return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearAll }}>
          {children}
        </CartContext.Provider>
      );
    };