import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        const getItems = fetch('../products.json')
        .then((res) => {
            return res.json()
        })

        getItems.then((products) => {
            if (categoryName !== undefined) {
                products = products.filter(p => p.category === categoryName)
            }
            setItems(products);
            setLoading(false)
        })
        .catch(error => {
            console.log(`Este fue el error: ${error}`);
        });
    },[]);

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