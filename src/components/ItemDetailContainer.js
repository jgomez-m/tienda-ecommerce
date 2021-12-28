import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState();
    const color = "#ffffff";
    const { id } = useParams();
    
    useEffect(() => {
        const getItem = fetch('../products.json')
        .then((res) => {
            return res.json()
        })
        
        getItem.then((products) => {
            console.log("Productos: ", products)
            const item = products.find((product) => product.id === id)
            setItem(item)
            setLoading(false)
        })
        .catch(error => {
            console.log(`Este fue el error: ${error}`);
        });

    },[id]);
    
    return (
        loading ? 
        (
        <div>
            <ClipLoader color={color} loading={loading} css={override} size={60} />
        </div>
        ) : (
            <div>
                <ItemDetail item={item} />
            </div>
        )
    )
}

export default ItemDetailContainer
