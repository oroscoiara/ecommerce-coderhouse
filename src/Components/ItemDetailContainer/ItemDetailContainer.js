import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore} from '../Firebase/index'

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


const ItemDetailContainer = ({ items }) => {
    const [count, setCount] = useState(0)
    const [loading, setLoading]  = useState(true)
    const [selectedItem, setSelectedItem] = useState([]);
    const [buttonVisibility, setButtonVisibility] = useState(false);
    const itemId = useParams();

    // const [item, setItem]= useState({}); //en setItem guardo en est local lo que me traigo de db
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

    const handleButton = (value) => {
        value > 0 ? setButtonVisibility(true) : setButtonVisibility(false);
    };
    

    return(
        
        
            <ItemDetail
            laoding={loading}
            item={selectedItem}
            handleButton={handleButton}
            buttonVisibility={buttonVisibility}
            count={count}
            setCount={setCount}
             />
        
    );
};

export default ItemDetailContainer
