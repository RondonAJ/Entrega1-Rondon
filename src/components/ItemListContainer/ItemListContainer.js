import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import gato from './assets/gato2.jpg'

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true) 
    
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map( doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
        /*const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })*/
    }, [categoryId])

    return (
        <div className='container-banner'>
            <img src={gato} alt="banner" className='banner'/>
            <h1 className='title-banner'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer