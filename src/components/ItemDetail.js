import React from 'react'
import img from '../img/audi-a3.jpg'

const ItemDetail = ( {item} ) => {
    return (
        <>
            <h2>{item.title}</h2>
            <img src={img} style={{height: 250}} alt='Imagen'/>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </>
    )
}

export default ItemDetail