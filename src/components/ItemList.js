import React from 'react'
import Item from './Item'
import { Container, StyledLink } from './Styles'

const ItemList = ({ items }) => {
    return (
        <Container>
            {items.map(item => 
            <StyledLink to={`/item/${item.id}`} key={item.id} >
                <Item key={item.id} item={item} />
            </StyledLink>
            )}
        </Container>
    )
}

export default ItemList
