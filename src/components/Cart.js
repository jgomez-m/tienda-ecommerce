import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';



const Cart = () => {
    const { cart, clear, totalPrice, itemsAmount } = useContext(CartContext);

    return (cart.length === 0 ?
        (<>
            <p>No hay productos en el carrito</p>
            <Link to='/'>
                <button>Ir a ver Productos</button>
            </Link>
        </>) :
        (<>
            {cart.map(e => <ItemCart key={e.id} element={e} /> )}
            <h2>Cantidad total de Productos: {itemsAmount()}</h2>
            <p>Precio total: $ {totalPrice()}</p>
            <button onClick={() => clear()}>Vaciar Carrito</button>
            <Link to="/buyerform">
              <button className="">
                <span>Confirmar compra</span>
              </button>
            </Link>
        </>)
    )
}

export default Cart
