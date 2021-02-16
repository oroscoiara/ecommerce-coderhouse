import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {
    const context = useContext(CartContext);

    return (
        <div>
          <Link to="/cart">
            <img src={faShoppingCart} alt="Carrito" />
            {context.cart.length > 0 && (
              <span className="bg-primary">{CartContext.cart.length}</span>
            )}
          </Link>
          </div>
      );
    };
export default CartWidget;