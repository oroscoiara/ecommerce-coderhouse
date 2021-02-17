import React, {useContext, useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import Count from '../ItemCount/Count'
import "./ItemDetail.css"


export default function ItemDetail ({item}) {

  return (
  <div className='col-12 d-flex flex-row justify-content-center p-4'>
      {
          item && 
          (<div>
          <img src={item.imgUrl} className="card-img-top img-fluid" alt="Imagen del producto"></img>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6>{item.description}</h6>
            <p className="card-text mt-2">{item.price}$</p>
            <Count max="15" min="1" imagen={item.imgUrl} price={item.price} title={item.title}/>
          </div>
          </div>)
      }
  </div>
  );
}



/*
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

    */
