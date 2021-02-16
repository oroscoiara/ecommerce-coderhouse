import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import {getFirestore} from '../Firebase/index'

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [displayingItems, setDisplayingItems] = useState();
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        setLoading(true);
        let database = getFirestore();
        let query;
        if (categoryId.id) {
            query = database
            .collection('items')
            .where('category', '==', categoryId.id);
        } else {
            query = database.collection('items');
        }
        query.get().then((querySnapshot) => {
            let itemsArray = querySnapshot.docs.map((item) =>{
                return {
                    ...item.data(),
                    id: item.id,

                };
            });
            setDisplayingItems(itemsArray);
            setLoading(false);
        });
    }, [categoryId]);

    return(
        <>
           <ItemList
            loading={loading}
            items={displayingItems}
            category={categoryId}
            />
        </>
    );
};

export default ItemListContainer