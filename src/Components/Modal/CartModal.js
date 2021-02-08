/*import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import { CartContext } from "../../Context/CartContext"


const CartModal = ({item, setModal, setAddItems, stock, setStock, cart, setCart, itemId}) => {


    const [goCart, setGoCart] = useState(false)

    const {addItems, addProduct} = useContext(CartContext)

    const exit = () => {
        setAddItems(addItems - addItems)
        setModal(false)
    }
    
    const confirm = () => {
        const button = document.querySelector(".cart_confirm");
        button.innerHTML = 'Confirmando'
        button.classList.add("loading-state")
        setStock(stock - addItems);
        addProduct(item, addItems)
        setTimeout(() => {
            setGoCart(true) 
        }, 1000);
    }

   useEffect (() => {
       console.log("GoCart:", goCart)
   }, [goCart])

    return (
        <div className="modal_div">
            <div className="cart_modal">
            <button className="modal_exit" onClick={exit}>X</button>
            <img className="modal_cover" src={item.imgUrl} alt="foto del productto"/>
            <div className="modal_info">
                <div className="m-info_item">
                    <h1 className="item_title">{item.title}</h1>
                    <h2 className="item_description">{item.description}</h2>
                    <span className="item_price">AR$ {item.price}</span>
                </div>
                <div className="m-info__cart">
                    <div className="cart_detail">
                        <span className="detail_text">Subtotal: </span>
                        <div className="detail_math">
                            <span className="math_quantity">Producto x {addItems}</span>
                            <span className="math_subtotal">
                                AR$ { addItems * item.price }
                            </span>
                        </div>
                    </div>
                    { !goCart &&
                    <button className="cart_confirm" onClick={confirm}>Confirmar compra</button> }
                    { goCart &&
                    <>
                    <Link to={"/cart"}>
                        <button className="cart_goCart">Ir al carrito<faShoppingCart className="cart_icon" /></button>
                    </Link>  
                    </> }
                </div>
            </div>
        </div>
        </div>
    )
}

export default CartModal

*/