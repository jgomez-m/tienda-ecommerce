import React, { useState } from 'react'
import CartContext from './CartContext'

const CacheProvider = ({ children } ) => {
    
    const [cart, setCart] = useState([])
    
    const addItem = (item, quantity) => {
        const id = item.id;
        if(isInCart(id)) {
            let itemInCart = cart.find(e => e.item.id === id)
            if(itemInCart.quantity + quantity <= item.stock 
                || quantity === -1) 
            {
                setCart(
                    cart.map((e) => {
                        return e.item.id === id? 
                        { ...e, quantity: e.quantity + quantity} 
                        : e
                    })
                );
            }
            else if (itemInCart.quantity + quantity > item.stock) {
                setCart(
                cart.map((e) => 
                    {return e.item.id === id ?
                        { ...e, quantity: e.item.stock} 
                        : e    
                    })
                );
            }
        }
        else {
            setCart([...cart, {item, quantity}])            
        }
    }

    const removeItem = (id) => {
        if(isInCart(id)) {
            setCart(cart.filter(e => e.item.id !== id))
        }
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => cart.some((e) => e.item.id === id)

    const itemsAmount = () => 
        cart.reduce((total, value) => total + value.quantity, 0);
    
    const totalPrice = () =>
        cart.reduce((total, value) => total + value.item.price * value.quantity, 0);

    return (
        <CartContext.Provider 
            value={{ cart, addItem, removeItem, clear, isInCart, totalPrice, itemsAmount }}>
            {children}
        </CartContext.Provider>
    );
}
export default CacheProvider;