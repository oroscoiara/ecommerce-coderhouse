import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../Context/CartContext';

const CartWidget = () => {

    const [cart, cartCounter] = useContext(CartContext)
    const cartItems = cartCounter()
    cart.length && cartCounter()
    return (
        <div className="cart">
            <Link to= {"/cart"}>
            <FontAwesomeIcon icon={faShoppingCart} value= {{className: "carticon"}}>
                <span className="cart_link" href="#home">Cart<faShoppingCart/></span>
            </FontAwesomeIcon>
            <p className="counter">Items: {cartItems ? cartItems : 0} </p>
            </Link>
        </div>
    )
};
   

export default CartWidget;