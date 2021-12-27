import React from 'react'
import image from '../img/audi_r8.jpg'

export const ItemDetail = ( {item} ) => {
    return (
        <>
            <h2>{item.title}</h2>
            <img src={image} style={{height: 250}} alt='Imagen'/>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </>
    )
}
