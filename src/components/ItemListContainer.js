import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    return (
        <>
            <h2>Este es el Container</h2>
            <ItemCount stock={0} initial={1} 
                onAdd={(num) => window.alert(`Productos agregados: ${num}`)} />
        </>
    )
}

export default ItemListContainer