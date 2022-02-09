import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

const ItemDetail = ( {item} ) => {
    const [showCounter, setShowCounter] = useState(true)
    const [counter, setCounter] = useState(1)
    const { addItem } = useContext(CartContext)
    
    const onAdd = (quantityToAdd) => {
        setCounter(quantityToAdd)
        setShowCounter(false)
    }

    const finalizarCompra = () => {
        addItem(item, counter)
    }
    
    return (
        <>
            <h2>{item.title}</h2>
            <img src={item.imageUrl} style={{height: 250}} alt={item.title}/>
            <p>{item.description}</p>
            <p>$ {item.price}</p>
            { showCounter ? 
            ( <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> ) :
            (
                <div><h3>Articulos a agregar: ({counter})</h3>
                    <Link className='box'
                        to='/cart' 
                        onClick={() => finalizarCompra()}>
                        <button>Terminar Compra</button>
                    </Link>
                    <Link to='/' className='box'>
                        <button>Seguir comprando</button>
                    </Link>
                </div>
            )}
        </>
    )
}

export default ItemDetail