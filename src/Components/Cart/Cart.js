import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {useCartContext, CartContext} from '../../Context/CartContext'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../Firebase/index';
import Form from './BuyerForm';
import "./Cart.css";

const Cart = ({ context }) => {
    const [buyerInfo, setBuyerInfo] = useState();
    const [modal, setModal] = useState(false);
    const [orderId, setOrderId] = useState();

    useEffect(() => {
        if (buyerInfo) {
            const database = getFirestore();
            const orders = database.collection('orders');

            const newOrder = {
                buyer: buyerInfo,
                items: context.cart,
                date: firebase.firestore.Timeitem.fromDate(new Date()),
                total: getTotal(), };

                orders
                .add(newOrder)
                .then(({id}) =>{
                    setOrderId(id);

                    const itemsUpdate = database.collection('items').where(
                        firebase.firestore.FieldPath.documentId(), 'in', context.cart.map((i) =>
                        i.id)
                    );
                    
                    const updatedStock = async () => {
                        const query = await itemsUpdate.get();
                        const batch = database.batch;
                        query.docs.forEach((docSnapshot, idx) => {
                            batch.update(docSnapshot.ref, {
                                stock: docSnapshot.data().stock - context.cart[idx].quantity,});
                            });
                            batch.commit();
                        };
                        updatedStock();
                    })

                    .catch((error) => alert('Erorr' + error))
                    .then(() => {
                        setModal(true);
                        setBuyerInfo();
                        context.clearAll();
                    });
                }
            }, [buyerInfo]);

            const getQuantity = () => {
                let amount = 0;
                context.cart.map((item) => (amount = amount + item.quantity));
                return amount;
            };

            const getTotal = () => {
                let total = 0;
                context.cart.map((item) => (total = total + item.price * item.quantity));
                return total;
            };

            return(
                <div>
                <h1>CARRITO</h1>
                {context.cart.length === 0 ? (
                    <div className="empty-cart">
                    <h2>CARRITO VACÍO</h2>
                    <Link to= "/">
                    <button className="button">Volver</button>
                    </Link>
                    </div>
                ):(
                    <div className="container">
                    <div>
                      <h2>Datos de su orden</h2>
                      {context.cart.map((item) => (
                        <div key={item.id}>
                          <img src={item.img} alt={item.title} />
                          <div>
                            <h4>{item.title}</h4>
                            <i>{item.quantity} unidades</i>
                            <b>${item.price}</b>
                            <FontAwesomeIcon icon={faTrashAlt}
                              alt="Delete item"
                              className="bin"
                              onClick={() => context.removeItem(item.id)}
                            />
                            </div>
                        </div>
                      ))}
                      <span className="h2">Cantidad Items: {getQuantity()}</span>
                      <span className="h2">Total: ${getTotal()}</span>
                    </div>
                    <Form setBuyerInfo={setBuyerInfo} />
                  </div>
                )}
                <div className={`modal ${modal ? 'active' : ''}`}>
                  <div className="modal-overlay" onClick={() => setModal(false)}></div>
                  <div className="modal-container">
                    <div className="modal-body">
                      <h3>ID de su compra: </h3>
                      <p className="text-primary h3">{orderId}</p>
                      <button className="btn btn-primary" onClick={() => setModal(false)}>
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          
export default Cart;