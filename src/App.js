import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar1 from './Components/NavBar/NavBar';
import Home from './Components/HomeContainer/Home'
import { useState } from 'react';
import { Fragment } from 'react';
import HomeContainer from './Components/HomeContainer/HomeContainer'
import ShopContainer from './Components/ShopContainer/ShopContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './Components/CartContainer/CartContainer'
import {CartProvider} from './Context/CartContext'
import CartWidget from './Components/CartWidget/CartWidget'
import CartContext from '././Context/CartContext'

import './App.css';


function App() {

  return (
    <div className="App">
      <CartContext>
      <BrowserRouter>
        <Navbar1 />
        <Switch>
          <Route exact path='/'> <HomeContainer /> </Route>
          <Route exact path="/"> <ShopContainer /> </Route>
          <Route path="/item/:id"> <ItemDetailContainer /> </Route>
          <Route path="/cart"> <CartContainer /> </Route>
        </Switch>
      </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;

