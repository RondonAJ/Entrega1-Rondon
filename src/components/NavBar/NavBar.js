import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import logo from './assets/logo.png'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            <div className="barra">
                <NavLink to={`/category/accesorio`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Accesorios</NavLink>
                <NavLink to={`/category/comida`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Comida</NavLink>
                <NavLink to={`/category/juguete`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Juguetes</NavLink>
                <CartWidget />
            </div>
            
        </nav>
    )
}

export default NavBar