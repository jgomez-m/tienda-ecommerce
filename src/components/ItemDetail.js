import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ( {item} ) => {
    return (
        <>
            <h2>{item.title}</h2>
            <img src={item.url} style={{height: 250}} alt='Imagen'/>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <ItemCount />
        </>
    )
}

export default ItemDetail