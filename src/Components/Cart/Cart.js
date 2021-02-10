import React, { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import useCartContext, {CartContext} from "../../context/CartContext"
import "./cart.css";
import 'firebase/firestore';


const Cart = () => {
    const {addItem, inCart} = useCartContext()
}
export default function Cart() {

    const { cart, removeItem } = useContext(CartContext)

    const resumenCompra = () => {
        const productosSeleccionados = cart.map((item, i) => {
            return (
                <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>$ {item.price}</td>
                    <td>$ {item.quantity * item.price}</td>
                    <td onClick={()=>removeItem(item.id)} className="iconLink"> <FontAwesomeIcon icon={faTrashAlt} /></td>
                </tr>
            )
        })

        const total = cart.reduce((acc, curr) => {
            return (acc += curr.cantidad * curr.precio
            )
        }, 0)

        const cantidadTotal = cart.reduce((acc, curr) => {
            return (acc += curr.cantidad
            )
        }, 0)

        const totales = () => {
            return (
                <tr>
                    <td></td>
                    <td><b>TOTAL</b></td>
                    <td>{cantidadTotal}</td>
                    <td></td>
                    <td>$ {total} </td>
                    <td></td>
                </tr>
            )
        }

        return (
            [...productosSeleccionados, totales()]
        )
    }

    
    return (
        <div>
            <h3>Cart</h3>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                        <th>Eliminar producto</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length === 0 ? carritoVacio() : resumenCompra()}
                </tbody>
            </Table>
        </div >
    )
}