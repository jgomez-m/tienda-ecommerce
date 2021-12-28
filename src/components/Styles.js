import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Title = styled.h2`
    font-size: 1.7em;
    text-align: center;
    color: blue;
`
export const Description = styled.h3`
    font-size: 0.8em;
    color: red;
`

export const Price = styled.p`
    font-size: 1.2em;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
`
