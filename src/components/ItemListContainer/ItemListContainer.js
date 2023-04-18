import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import gato from './assets/gato2.jpg'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div className='container-banner'>
            <img src={gato} alt="banner" className='banner'/>
            <h1 className='title-banner'>Los mejores productos para tu mascota, están aqui.</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer