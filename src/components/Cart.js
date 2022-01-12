import React, { useContext } from 'react'
import CartContext from '../context/CartContext'



const Cart = () => {
    const { cart, clear, totalPrice } = useContext(CartContext);

    return (
        <div>
            <h2>Este es la cantidad de elementos: {cart.length}</h2>
            <p>Este es el precio total: $ {totalPrice()}</p>
            <button onClick={() => clear()}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart
