import React, {useContext, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import Count from '../ItemCount/Count'
import { CartContext } from '../../Context/CartContext'
import "./ItemDetail.css"
import CartModal from "../Modal/CartModal"

const ItemDetail = ({ loading, item, handleButton, buttonVisibility, count, setCount }) => {

    const context = useContext(CartContext);
    
    const handleCount = count => {
        setCount(count)
    }

    return (
        <>
          {loading ? (
            <div className="loading loading-lg"></div>
          ) : item === 404 ? (
            <div>
              <h1>404</h1>
              <h3>Item no encontrado.</h3>
              <Link to="/">
                <button className="btn btn-primary">Volver</button>
              </Link>
            </div>
          ) : (
            <div>
                <img src={item.imgUrl} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <b>Precio: ${item.price}</b>
                <i>Stock Disponible: {item.stock}</i>
                <Count
                  initial={0}
                  stock={item.stock}
                  handleButton={handleButton}
                  count={count}
                  setCount={setCount}
                />
    
                <Link
                  to="/cart"
                  className={`btn btn-primary ${!buttonVisibility && 'disabled'}`}
                  onClick={() => context.addItem(item, count)}
                >
                  Agregar al Carrito
                </Link>
              </div>
            </div>
          )}
        </>
      );
    };

    export default ItemDetail;
