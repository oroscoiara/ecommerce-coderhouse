import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../Context/CartContext'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../Firebase/index';
import "./Cart.css";

const Cart = () => {
    
  const [selectedItems, setSelectedItems] = useContext(Context);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [total, setTotal] = useState(0)


  useEffect(()=> {
      let fullAmount = 0;
      if(selectedItems.length > 0) {
          selectedItems.map(item => (
              fullAmount += item.inCart
          ))
          setAmount(fullAmount);
      }
  }, [selectedItems])


  useEffect(()=> { //total monto
      let fullPay = 0;
      if(selectedItems.length > 0) {
          selectedItems.map(item => (
              fullPay += item.price * item.inCart
          ))
          setTotal(fullPay);
      }
  }, [selectedItems])

  const addOrder = () => {
      if(document.getElementById('form-email').value === document.getElementById('check-email').value) {
          setLoading(true);

          const db = getFirestore();        
          const orders = db.collection('orders');

          const newOrder = {
              buyer: {
                  name: document.getElementById('form-name').value,
                  phone: document.getElementById('form-phone').value,
                  email: document.getElementById('form-email').value,
                  address: document.getElementById('form-address').value
                  },
              items: selectedItems,
              total: total,
              date: firebase.firestore.Timestamp.fromDate(new Date())
          };
          
          orders.add(newOrder)
              .then(({ id }) => {
                  setOrderId(id);
              }).catch((error) => {
                  console.log(error)
              }).finally(() => {
                  setLoading(false);
              });
      } else {
          document.getElementById('check-label').style.display = 'block'
      }
  }


  const Reload = () => {
      window.location.reload();
  }


  if(orderId !== '') {
      return (
          <div className="row order_container text-center">
              <div className="col-12 p-5">
                  <h1>Tu compra se realizó exitosamente</h1>
                  <h2>Preparando tu compra</h2>
                  <h3>El ID de seguimiento de tu compra es: <span className='badge'>{orderId}</span></h3>
                  <button onClick={Reload}>Volver</button>
              </div>
          </div>
      )
  }

  return (
      <div className='col-12 text-center mt-3 cart_container'>
          <h3>Cart</h3>
          {selectedItems.length > 0 ? selectedItems.map((item) => (
                  <div className='mt-4'>
                      <div className='d-flex flex-row justify-content-around'>
                          <h3 className='itemTitle'>{item.title}</h3>
                          <h4>${item.price}</h4>
                          <p className='badge'>{item.inCart}</p>
                          <button onClick={Reload} > Vaciar carrito </button>
                      </div>  
                      <hr></hr>
                  </div>
              )): <div className='col-12 text-center empty_cart-container'>
                   <h3>No hay productos en tu carrito</h3> 
                  <Link to={`/home`}>Volver a la tienda</Link>
                  </div>
          }
          <div className='row'>
              <div className='col-12 checkout_container mb-4'>
                  <h3>Checkout</h3>
                  <form>
                  <input className="form-control mb-1" id="form-name" type="text" placeholder="Name" />
                  <input className="form-control mb-1" id="form-phone" type="tel" placeholder="Phone" />
                  <input className="form-control mb-1" id="form-email" type="email" placeholder="E-mail" />
                  <input className="form-control mb-1" id="check-email" type="email" placeholder="E-mail" />
                  <label id="check-label" style={{display:'none'}}>Ambos emails deben ser iguales</label>
                  <input className="form-control mb-1" id="form-address" type="text" placeholder="Address" />
                  </form>
                  <h4 className='mt-4'>Detalles de su orden</h4>
                  <h5>Items: {amount}</h5>
                  <h5>Total: {total}</h5>
                  <button onClick={addOrder} className='m-4'>Terminar compra</button>
              </div>

          </div>
          

          
      </div>
  );
}

export default Cart;

/*
const Cart = () => {
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

*/