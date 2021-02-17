import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item'
import './ItemListContainer.css'
import { getFirestore } from '../Firebase/index'

const ItemListContainer = () => {
    const [loading , setLoading] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection('items');
        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                return (
                    <h2>Estamos teniendo problemas para cargar nuestros productos. Por favor, intenta nuevamente.</h2>
                )
            }
            setItems(querySnapshot.docs.map(doc => ({
                ...doc.data(), id: doc.id  })));
        }).catch((error) => {
            console.log('Error en la búsqueda de productos', error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div className='row justify-content-center text-center'>
            <div className='col-1 2mt-4'>
                <h2>Sin Pulguitas - PetShop</h2>
                {
                    loading && <h3>Cargando..</h3>
                }
            </div>
                {items.length && items.map(item => (
                  <Item price={item.price} image={item.imgUrl} id={item.id}/>
                ))                }
        </div>
    );
}

export default ItemListContainer;

/*
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

*/