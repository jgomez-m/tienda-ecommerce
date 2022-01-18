import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemCart = ({ element }) => {
    const { removeItem } = useContext(CartContext)
    const item = element.item

    return (
        <div
            className="row m-3 p- cart-item align-items-center justify-content-between"
            key={item.id}
        >
            <div className=" col-md-3 col-lg-3 ">
                <h6 className="item-name">{item.title}</h6>
            </div>
            <div className=" col-md-2 col-lg-2 ">
                <h6 className="ml-5 ">${item.price}</h6>
            </div>

            <div className=" col-md-1 col-lg-3 ">
                <button
                    className="button-alone ml-5 p-1"
                    onClick={() => removeItem(item.id)}
                >
                    <FontAwesomeIcon icon={["fas", "times"]} />
                </button>
            </div>
        </div>
    )
}

export default ItemCart
