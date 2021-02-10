import React, { useContext, useState, useEffect} from 'react';
import Cart from './Cart'
import {Context} from '../../Context/CartContext'
import { getFirestore } from '../Firebase';
import useCartContext from '../../Context/CartContext';

const CartContainer = () => {

    const [cart, cartCounter, total, clearCart] = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [envio] = useState(120)
    const [order, setOrder] = useState({}) 
    
    useEffect(() => {
        cartItems && cartItems.map((item) => setTotal ((prevTotal) => (prevTotal +(item.price * item.qty))) 
        )
    }, [cartItems])

    useEffect(() => {

    },[total])

    const handleCompra= () => {
        const db =getFirestore()
        const orderDb = db.collection('orden')
    }

    return (
        <div className='container1'>
            <Cart cartItems={cartItems} total={total} envio={envio} handleCompra={handleCompra} />
        </div>
    );
}

export default CartContainer;