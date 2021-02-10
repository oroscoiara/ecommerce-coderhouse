import React, { createContext, useState, useContext} from 'react';

const CartContext = createContext(null)
const useCartContext= () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])
    const [addItems, setAddItems] = useState([])


    const addItem = (item, quantity) => {
        setItems([...items, {item, quantity }])
        if ( items !== -1) {
            alert("Producto ya agregado al carrito")
        } else {
            setItems([...items, {
                "id": item.id,
                "titutlo": item.title,
                "precio": item.precio,
                "cantidad": quantity
            }])
        };

    const inCart = itemId => {
        return items.some(i => i.item.id === itemId)};

    const deleteFromCart = itemId => { 
        setItems(items.filter(i => i.item.id != itemId))}
        inCart(itemId).counter += inCart(itemId).quantity
        setCart([])
    ;

    const cartCounter = () => { 
        let totalItems = []
        let sum = 0;
        cart.map(compra => {
            return totalItems.push(compra.quantity)
        })
        console.log("cantidad:", totalItems)
        totalItems.length < 2 ? sum = totalItems[0]
        :
        totalItems.reduce((accumulator, currentValue) => {
            return sum = accumulator + currentValue
        })
        return sum
    };

    const total = () => {
        return items.reduce((acc, i) => acc + i.quantity)
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{cart, setCart, addItems, addItem, setAddItems, inCart,
         deleteFromCart, clearCart, total, cartCounter}}>
            {children}
        </CartContext.Provider>
    );
        }};
        

export default useCartContext