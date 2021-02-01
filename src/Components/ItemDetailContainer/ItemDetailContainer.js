import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


const items = [
    {
        id: 1,
        title: "collar pequeño",
        description: "collar para razas mini y medianas",
        price: 270,
        stock: 10,
        perfilter: "perros",
        imgUrl : 'https://i.imgur.com/X5GQCBP.jpg'
    },
    {
        id: 2,
        title: "piedras para gatos",
        description: "piedras para gatos por 5 kg",
        price: 500,
        stock: 30,
        perfilter: "gatos",
        imgUrl: 'https://i.imgur.com/bqbVitJ.jpg'
    },

    {
        id: 3,
        title: "correa extensible",
        description: "correa extensible 10 metros",
        price: 700,
        stock: 40,
        perfilter: "perros",
        imgUrl: 'https://i.imgur.com/XyfxJFl.jpg'
    },
];

const ItemDetailContainer = () => {
    const [item, setItem]= useState({});
    const itemId = useParams();

    useEffect(() => {
            let gettingItems = new Promise((resolve, reject) => {
                setTimeout(() => {
                   resolve(items);
                },2000);
                }); 

            gettingItems
            .then((result) => {
                let filtered = result.find(
                    (item) => item.id.toString() === itemId.id
                );
                
                setItem(filtered);
                
                });
      
    },[itemId]);


    return(
        
            <ItemDetail
            item={item}
             />
        
    );
};

export default ItemDetailContainer