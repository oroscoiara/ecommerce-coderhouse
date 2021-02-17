import React  from 'react';
import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({ title, imgUrl, price, id })=> {

  
  return (
    <div className="card col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <img src={item.imgUrl} width= "40px" height= "40px" alt="imagen del producto"></img>
        <div className="card-body">
          <p className="card-text">{item.title}</p>
           <p className="card-text">${item.price}</p>
           <a className="btn"> <Link to={`/item/${id}`} key={item.id}>Ver más</Link></a>
        </div>
    </div>
);
}

export default Item;