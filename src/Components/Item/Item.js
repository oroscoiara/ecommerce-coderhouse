import React  from 'react';
import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({ item })=> {

    return(

        <div>
        <Link to={`/item/${item.id}`} key={item.id}>
        <span>{item.title}</span></Link>    
        <span>{item.price}</span>
        <img src={item.imgUrl} width= "40px" height= "40px" alt="imagen del producto"/>
              
        </div>
        
);
};

export default Item;