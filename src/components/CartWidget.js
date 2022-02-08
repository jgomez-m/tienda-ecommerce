import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = () => {
    const { itemsAmount } = useContext(CartContext)

    return (
        <Link
            to={`/cart`}
            className="b-w-hover text-no-wrap no-text-decoration mr-3 p-1"
            id="cart-icon-b">
                {itemsAmount() > 0 && <span>{itemsAmount()}</span>}
                <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
        </Link>
    )
}

export default CartWidget
