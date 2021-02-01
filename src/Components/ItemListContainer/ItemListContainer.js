import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';


const items1 = [
    {
        id: 1,
        title: "collar pequeño",
        description: "collar para razas mini y medianas",
        price: 270,
        stock: 10,
        category: "perros",
        imgUrl : 'https://i.imgur.com/X5GQCBP.jpg'
    },
    {
        id: 2,
        title: "piedras para gatos",
        description: "piedras para gatos por 5 kg",
        price: 500,
        stock: 30,
        category: "gatos",
        imgUrl: 'https://i.imgur.com/bqbVitJ.jpg'
    },

    {
        id: 3,
        title: "correa extensible",
        description: "correa extensible 10 metros",
        price: 700,
        stock: 40,
        category: "perros",
        imgUrl: 'https://i.imgur.com/XyfxJFl.jpg'
    },
];


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect (() => {
        let gettingItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items1)
            },2000);
            }); 

        gettingItems
        .then((result) => {
            console.log(categoryId)
            if (categoryId) {
            
                setItems(result.filter((item) => 
                    item.category === categoryId
                ));  
        }
            else 
            setItems(result);
        })
            
    },[categoryId] )

     
    return (
            <ItemList items={items} />

        );
};

export default ItemListContainer