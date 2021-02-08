import React from 'react';
import { useContext } from 'react';
import { Context } from '../Context/CartContext';

const AddButton = ({ Count, imgUrl, price, title }) => {

    const [selectedItems, setSelectedItems] = useContext(Context);
    
    const handleClick = () => {
        setSelectedItems([...selectedItems, {
            title : title,
            imagen: imgUrl, 
            price: price,
            inCart: Count,
        }])
    } 
    
    return (
        <button type="button" className="mt-3 mx-auto Add-button" onClick={() => handleClick()}>Agregar {Count}</button>
    );
}

export default AddButton;