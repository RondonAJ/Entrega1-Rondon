import React from 'react'
import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0) // agregar el estado para totalQuantity
    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
            setTotalQuantity(prev => prev + quantity)
            setTotal(prev => prev + item.price * quantity)
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(prev => prev.filter(item => item.id !== itemId))
        setTotalQuantity(prev => prev - cartUpdated.quantity)
        setCart(cartUpdated)
        setTotal(prev => prev - cartUpdated.price * cartUpdated.quantity)
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
        setTotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            { children }
        </CartContext.Provider>
    )
}