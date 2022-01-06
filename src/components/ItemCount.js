import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const updateCount = (newCount) => {
        if (newCount <= stock && newCount >= 0) {
            setCount(newCount)
        }
    }

    return (
        <div>
            <div style={{display: 'block'}}>
                <button onClick={() => updateCount(count - 1)}> - </button>
                <h2>{`Count: ${count}`}</h2>
                <button onClick={() => updateCount(count + 1)}> + </button>
            </div>
            <button style={{marginTop: '20px'}} 
                onClick={() => onAdd(count)}
                disabled={count < 1}>
                    Agregar al carrito
            </button>
        </div>
    )

}

export default ItemCount

