import React, { useContext, useEffect } from 'react'
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import "./cart.css";

export default function Cart() {

    const { cart, removeItem } = useContext(CartContext)
    console.log("cart",cart)


    const resumenCompra = () => {
        const productosSeleccionados = cart.map((producto, i) => {
            return (
                <tr key={producto.id}>
                    <td>{i + 1}</td>
                    <td>{producto.linea}-{producto.varietal}</td>
                    <td>{producto.cantidad}</td>
                    <td>$ {producto.precio}</td>
                    <td>$ {producto.cantidad * producto.precio}</td>
                    <td onClick={()=>removeItem(producto.id)} className="iconLink"> <FontAwesomeIcon icon={faTrashAlt} /></td>
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

    const carritoVacio = () => {
        return (
            <>
                <tr>
                    <td colspan="6">Ud no ha agregado ningún producto aún a su carrito </td>
                </tr>
                <tr>
                    <td colspan="6"><Link to="../"><Button variant="outline-dark">Volver al Home </Button></Link> </td>
                </tr>

            </>
        )
    }
    return (
        <div>
            <h3>Este es el carrito </h3>
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