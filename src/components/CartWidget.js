import React from 'react'
import { Link } from 'react-router-dom'
import cartImage from '../img/cart-icon-300.png'

const CartWidget = () => {
    return (
            <Link to={'/cart'}>
                <img src={cartImage} className="Cart-widget" alt="cartImg" />
            </Link>
    )
}

export default CartWidget
