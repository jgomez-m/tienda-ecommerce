import React from 'react'
import cartImage from '../img/cart-icon-300.png'

const CartWidget = () => {
    return (
        <div>
            <img src={cartImage} className="Cart-widget" alt="cartImg" />
        </div>
    )
}

export default CartWidget
