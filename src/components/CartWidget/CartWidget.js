import React from 'react'
import cart from './assets/shopping-cart.png'

const CartWidget = () => {
    return (
        <div className='div-cart'>
            <img src={cart} alt="cart-widget" className='cart'/>
            0
        </div>
    )
}

export default CartWidget