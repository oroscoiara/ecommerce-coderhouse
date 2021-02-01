import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import logo from '../../Assest/logo.png'
import { NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navbar1 = () => {
    
    return(
        <div className='containerNav'>
            <NavLink to= "/"><div className='logo'>
                <img src={ logo } className="logo" alt="logo" />
            </div>
            </NavLink>
            <p> <a href=".#action/1.1">Productos</a></p>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/category/perros">Perros</NavDropdown.Item>
                    <NavDropdown.Item href="/category/gatos">Gatos</NavDropdown.Item>
                    <NavDropdown.Item href="/">Todos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    </NavDropdown>
            <p> <a href="./contact.html">Contact</a></p>
            <p> <CartWidget> Carrito </CartWidget> </p>          
        </div>
    )   
}
export default Navbar1;