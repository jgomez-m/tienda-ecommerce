import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import db from '../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        let itemsFromFirestore = []
        const loadData = async() => {
            const myProducts = categoryName ? 
            query(collection(db, 'product-list'), where('category', '==', categoryName)) :
            collection(db, 'product-list')
            const querySnapshot = await getDocs(myProducts)
            itemsFromFirestore = querySnapshot.docs.map(e => {
                return {...e.data(), id: e.id}
            })
            setItems(itemsFromFirestore)
            setLoading(false)
        }
        loadData()

    },[categoryName]);

    return (
        loading ? 
        (
        <div>
            <h3>Cargando ...</h3>
        </div>
        ) :
        (
        <div>
            <ItemList items={items} />
        </div>
        )
    )
}

export default ItemListContainer