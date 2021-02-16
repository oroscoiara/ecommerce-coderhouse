import React from 'react';
import Item from '../Item/Item'
import './ItemList.css'
import { Link } from 'react-router-dom';

const ItemList = ({items, category, loading}) => {
  return (
    <>
    {loading ? (
      <div className="loading"></div>
    ):(
    <div>
      <h2>{category? category.toUpperCase() : 'Todas'}</h2>
      {items?.map((item, idx) => {
        return <Link to={`/item/${item.id}`} key={item.id}>
          <Item key={idx} item={item} />
          </Link>
        })}
    </div>  
  )}
  </>
  );
    };


export default ItemList