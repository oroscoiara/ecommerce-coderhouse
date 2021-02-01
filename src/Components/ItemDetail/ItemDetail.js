import React from 'react';
import {Link} from 'react-router-dom'
import Counter from '../ItemCount/Count'

const ItemDetail = ({ item }) => {
    const HandleCounter = (count) => {
        console.log(count)
    }
    return(
        <div>
        <img src={item.imgUrl} alt="imagenproducto" />
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <h3>{item.price}</h3>
        <h3>{item.stock}</h3>
        <Counter initial={0} stock={item.stock} onAdd={HandleCounter} />
        <Link to="/cart">Agregar al cart</Link>
        </div>
        )}

export default ItemDetail
