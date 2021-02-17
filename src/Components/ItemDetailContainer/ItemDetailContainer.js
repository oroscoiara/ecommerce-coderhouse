import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore} from '../Firebase/index'
import { useParams } from 'react-router-dom';
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
    
    const [Loading, setLoading] = useState(false);
    const {itemId} = useParams(); 
    const [itemSelected, setItemSelected] = useState(); //en setItem guardo en estado local lo que me traigo de db
    console.log(itemSelected);

    useEffect(()=>{
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = db.collection('items'); //acá llamo a mi colección
        const item = itemsCollection.doc(itemId.id); // (id)
        
        item.get().then((doc) => {
            if (!doc.exists) {
                console.log('El producto no existe');
                return;
            }
            console.log('Producto encontrado:');   //guardo en setitems un obj
            setItemSelected({ id: doc.id, ...doc.data() });
        }).catch((error)=>{
            console.log('Error en la búsqueda', error);
        }).finally(() => {
            setLoading(false);
        })
    },[itemId]) //se queda escuchando a ID

    return (
        <div className='row justify-content-center'>
            {
                Loading && <h3>Cargando..</h3>
            }
               <ItemDetail item={itemSelected}/>
        </div>
    );
}

export default ItemDetailContainer;

/*


    // const [item, setItem]= useState({}); 
    //    const [cartItems, setCartItems] = useContext(useContext)
    
    useEffect(() => {
        const database = getFirestore()
        const itemDatabase= database.collection('items');//acá llamo a mi colección
        const item = itemDatabase.doc(itemId.id) //el ID que me trae useParams

        item.get()
        .then((doc) =>{
            if(!doc.exist){
                console.log("no existe el documento");
                return;
            }
            setSelectedItem({id: doc.id, ...doc.data() }); //guardo en setitems un obj
        })
        .catch((e) => console.log(`ocurrió un error: ${e}`))//para traerme los datos siempre get. porque es una promesa
        //catch para posibles errores
    }, [itemId] ) //se queda escuchando a ID

    );
};


*/