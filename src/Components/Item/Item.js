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


/*

const Item = ({ item })=> {

    return(
        <React.Fragment>
        <div key={item.id} className={"item_div"}>
        <Link to={`/item/${item.id}`} >
        <img src={process.env.PUBLIC_URL + item.pictureurl} className={"item_img"} alt="Imagen del producto"></img> 
        </Link>
            <div className={"item_info"}>
                <span className={"info_title"}>{item.title}</span>
                <span className={"info_description"}>{item.description}</span>
                <span className={"info__price"}>{item.price}</span>
            </div>
        </div>
        </React.Fragment>
);
};

export default Item;

*/