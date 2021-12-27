import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    useEffect(() => {
        const itemArray = [
            {
                id: "1",
                title: "Titulo 1",
                description: "Description",
                price: "100"
            },
            {
                id: "2",
                title: "Titulo 2",
                description: "Description",
                price: "1500"
            },
            {
                id: "3",
                title: "Titulo 3",
                description: "Description",
                price: "500"
            }
        ]
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => resolve(itemArray),2000);
          });

        getItems
            .then((res) => {
                console.log("Resolviendo la Promise...", res);
                setLoading(false);
                setItems(res);
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