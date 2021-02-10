import React from 'react'
import './App.css';
import Navbar1 from './Components/NavBar/NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './Components/CartWidget/CartWidget'
import {CartProvider} from './Context/CartContext'
import CartContext from './Context/CartContext'


function App() {

  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Navbar1 />
        <Switch>
          <Route exact path="/"> <ItemListContainer /> </Route>
          <Route path="/category/:categoryId">n<ItemListContainer /> </Route>
          <Route path="/item/:id"> <ItemDetailContainer /> </Route>
          <Route path="/cart"> <CartWidget /> </Route>
        </Switch>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

