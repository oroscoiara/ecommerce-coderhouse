import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading'
import {getCatalog, getFirestore} from '../Firebase/index'

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
    const {id} = useParams();
    const [item, setItem]= useState({}); //en setItem guardo en est local lo que me traigo de db
    const [count, setCount] = useState(0)
    const [cartItems, setCartItems] = useContext(useContext)
    
    useEffect(() => {
        const db= getFirestore();
        const itemsDb = db.collection('items') //acá llamo a mi colección
        const itemDb = itemsDb.doc(id) //el ID que me trae useParams

        itemDb.get()
        .then((doc) =>{
            if(!doc.exist){
                console.log("no existe el documento")
                return;
            }
            setItem({id: doc.id, ...doc.data() }) //guardo en setitems un obj
        })
        .catch((e) => console.log(`ocurrió un error: ${e}`))//para traerme los datos siempre get. porque es una promesa
        //catch para posibles errores
    }, [id] ) //se queda escuchando a ID

/*    useEffect(() => {
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

*/
    return(
        
            <ItemDetail
            item={item}
             />
        
    );
};

export default ItemDetailContainer
