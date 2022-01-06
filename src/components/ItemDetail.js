import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ( {item} ) => {
    const [showCounter, setShowCounter] = useState(true)
    const [counter, setCounter] = useState(1)
    
    const onAdd = (quantityToAdd) => {
        setCounter(quantityToAdd)
        setShowCounter(false)
    }
    
    return (
        <>
            <h2>{item.title}</h2>
            <img src={item.url} style={{height: 250}} alt='Imagen'/>
            <p>{item.description}</p>
            <p>{item.price}</p>
            { showCounter ? 
            ( <ItemCount stock={10} initial={1} onAdd={onAdd}/> ) :
            (
                <div><h3>Articulos a agregar: ({counter})</h3>
                <Link to='/cart'>Finalizar Compra.</Link>
                </div>
            )}
        </>
    )
}

export default ItemDetail