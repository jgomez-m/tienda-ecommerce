import React from 'react'
import { Title, Description, Price } from './Styles'


const Item = ({ item }) => {

    return (
        <div key={item.id} style={{margin: 20}}>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <Price>{item.price}</Price>
        </div>
    )
}

export default Item
