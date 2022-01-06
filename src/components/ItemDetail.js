import React from 'react'

const ItemDetail = ( {item} ) => {
    return (
        <>
            <h2>{item.title}</h2>
            <img src={item.url} style={{height: 250}} alt='Imagen'/>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </>
    )
}

export default ItemDetail