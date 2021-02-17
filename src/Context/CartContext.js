import React, { createContext, useState, useEffect } from 'react';

export const Context = React.createContext([]);

const CartContext = (props) => {

    const [selectedItems, setSelectedItems] = useState([]);

    return (
        <Context.Provider value={[selectedItems, setSelectedItems]}>
            {props.children}
        </Context.Provider>
    )
}

export default CartContext;