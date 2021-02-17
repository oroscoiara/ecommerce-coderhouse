import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context/CartContext'

const AddButton = ({ count, imgUrl, price, title, click }) => {

    const [selectedItems, setSelectedItems] = useContext(Context);
    
    const handleClick = () => {
        setSelectedItems([...selectedItems, {
            title : title,
            image: imgUrl, 
            price: price,
            inCart: count,
        }])
    } 
    
    return (
        <button style={{ borderRadius: '7px', backgroundColor: 'green' }} type="button" className="mt-3 mx-auto Add-button" onClick={() => handleClick()}>Agregar {count}</button>
    );
}

export default AddButton;