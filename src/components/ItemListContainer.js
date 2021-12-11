import React from 'react'

const ItemListContainer = (props) => {
    return (
        <div>
            <h2>Este es el Container</h2>
            {props.greeting}
        </div>
    )
}

export default ItemListContainer