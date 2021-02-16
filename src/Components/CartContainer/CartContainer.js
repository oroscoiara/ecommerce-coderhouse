import React, { useContext, useState, useEffect} from 'react';
import Cart from '../Cart/Cart'
import {Context} from '../../Context/CartContext'
import { getFirestore } from '../Firebase';
import {CartContext} from '../../Context/CartContext';

const CartContainer = () => {
    const context = useContext(CartContext);
  
    return (
      <Cart context={context} />
       );
  };

export default CartContainer;