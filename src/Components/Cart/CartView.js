import React, {useEffect, useContext} from 'react'
import './cartview.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartItem from '../Cart/Cart'
import { Link } from 'react-router-dom'

import useCartContext from '../../Context/CartContext'
/*
const CartView = () => {

    const {cart, total, clearCart, cartCounter} = useContext(CartContext)
    
    const totalPrice = total()

    const totalItems = cartCounter()

    useEffect(()=> {
        console.log("Carrito", cart)
    }, [cart])


    return (
        <React.Fragment>
            <div className="cart_view" style={{height: cart.length > 1 && "100%"}}>
            { !cart.length &&
            <div className="cartview_display">
                <div className="cartview_firstrow">
                    <h1 className="cartview_title">Carrito<faShoppingCart/></h1>
                </div>
                <div className="grid_banner">
                    <span className="banner_product">Producto</span>
                    <span>Precio</span>
                    <span>Cantidad</span>
                    <span>Subtotal</span>
                </div>
                <div className="cartview_notItems">
                    <h2>Su carrito está vacío</h2>
                    <Link to="/">
                    <button className="cartview_button">Continuar comprando</button>
                    </Link>
                </div>
            </div> }
            { cart.length >= 1 &&
            <div className="cartview_display">
            <div className="cartview_firstrow">
                <h1 className="cartview_title">Mi Carrito<TiShoppingCart className="cartview__icon" />
                   <span className="title__number">({totalItems} Items)</span>
                </h1>
                            </div>
            <div className="grid__banner">
                <span className="banner__product">Producto</span>
                <span></span>
                <span>Precio</span>
                <span>Cantidad</span>
                <span>Subtotal</span>
            </div>
            <ul className="grid__itemlist">
                { cart.map((purchase) => {
                    return  (
                        <CartItem key={purchase.item.itemId} purchase={purchase} /> )
                  })
                }
            </ul>
            <div className="cartview_controls">
                <Link to="/">
                <button className="cartview_button">Seguir comprando</button>
                </Link>
                <button onClick={clearCart} className="cartview_button">Vaciar carrito</button>
                <div className="controls_total">
                    <div className="total_row">
                        <span>Subtotal:</span> <span className="span_price">AR$ {totalPrice}</span>
                    </div>
                    <div className="total_row">
                        <span>Total:</span> <span className="span_price">AR$ {totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>}
    </div>
    </React.Fragment>
    )
}

export default CartView

*/