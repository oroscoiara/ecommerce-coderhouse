import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Context} from '../../Context/CartContext';

const CartWidget = () => {
  const [selectedItems] = useContext(Context);
  const [amount, setAmount] = useState(0);

  useEffect(()=> {
    let fullAmount = 0;
    if(selectedItems.length > 0) {
        selectedItems.map(item => (
            fullAmount += item.inCart
        ))
        setAmount(fullAmount);
    }
}, [selectedItems])

  return (
      <a className="nav-link" href="#">
        <span className="badge badge-pill badge-light">{amount}</span>
        <FontAwesomeIcon icon={faShoppingCart} />
    </a>
  );
}

export default CartWidget;

