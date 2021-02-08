import React, {useContext, useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import Count from '../ItemCount/Count'
import {CartContext} from '../../Context/CartContext'
import "./ItemDetail.css"
import CartModal from "../Modal/CartModal"

const ItemDetail = ({ item }) => {
    const HandleCounter = (count) => {
        console.log(count)
    }
    
    const [counter, setCounter] = useState(initial)
    return(
        <div>
        <img src={item.imgUrl} alt="imagenproducto" />
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <h3>{item.price}</h3>
        <h3>{item.stock}</h3>
        <Count initial={0} stock={item.stock} onAdd={HandleCounter} />
        <Link to="/cart">Agregar al cart</Link>
        </div>
        )}

export default ItemDetail


/*

const ItemDetail = ({ item }) => {

    const {cart, setCart} = useContext(CartContext)
    const {stock, setStock} = useContext(CartContext)
    const {addItems, setAddItems} = useContext(CartContext)
    
    useEffect(() => {
        setStock(item.stock)},
        [setStock, item.stock])

    const [modal, setModal]= useState(false)
    const {itemId} = useParams()
    const onAdd = (counter) => {
        setModal(true);
        setAddItems(counter)
    }
    useEffect(() => {
    }, [itemId])

    useEffect(() => {
        console.log("Added items" ,addItems)
    }, [addItems])

    useEffect(() => {
        console.log("Modal:" ,modal)
    }, [modal])

    useEffect(() => {
    }, [stock])

    useEffect(() => {
    }, [cart])

   return(
        <div className="item_detail">
            <div className="photo_detail">
            <img src={item.imgUrl} alt="imagenproducto" />
            </div>
           
        <div className="info_detail" key={item.id}>
            <h1 className="title_detail">{item.title}</h1>
            <h3 className="description_detail">{item.description}</h3>
            <h3 className="price_detail">{item.price}</h3>
            <p className="cat_detail">Categorías:
            {item.category !== undefined && item.cat.some((category) => {
                return (<Link ket={category.itemId} to={`/category/${category.itemId}`}>
                    <span>{category.name}</span> </Link>)
            })
        }
        </p>
        </div>
        <div className="counter_detail">
        <Count initial={1} stock={item.stock} onAdd={addItems} />
        </div>
        { modal ? < CartModal item={item} setModal={setModal} addItems={addItems} setAddItems={setAddItems}
      stock={stock} setStock={setStock} cart={cart} setCart={setCart} itemId={itemId} /> : null }
    </div>
  )
}

export default ItemDetail */
