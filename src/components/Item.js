import React from 'react'
import { Title, Price } from './Styles'


const Item = ({ item }) => {

    return (
        <div key={item.id} style={{margin: 20}}>
            <img src={item.imageUrl} style={{height: 100}} alt={item.title}/>
            <Title>{item.title}</Title>
            <Price>$ {item.price}</Price>
        </div>
    )
}

export default Item
