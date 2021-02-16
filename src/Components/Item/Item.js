import React  from 'react';
import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({ title, imgUrl, price, category })=> {

    return(
    <>
    <div className="card">
        <div className="card-img">
            <img src={imgUrl} alt={title} className="img-responsive" />
        </div>
        <div className="card-title h5">{title}</div>
        <div className="card-subtitle text-gray">${price}</div>
      </div>
      <div className="card-body">{category}</div>
      <div className="card-footer">
        <button className="btn btn-primary">Comprar</button>
      </div>
    </>
    );
};
       /* <div>
        <Link to={`/item/${item.id}`} key={item.id}>
        <span>{item.title}</span></Link>    
        <span>{item.price}</span>
        <img src={item.imgUrl} width= "40px" height= "40px" alt="imagen del producto"/>
              
        </div>
        
);
};
 
*/
export default Item;