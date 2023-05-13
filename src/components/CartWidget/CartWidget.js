import React from 'react'
import cart from './assets/shopping-cart.png'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to='/cart' className='div-cart' style={{ display: totalQuantity > 0 ? 'inline-flex' : 'none' }}>
            <img src={cart} alt="cart-widget" className='cart'/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget