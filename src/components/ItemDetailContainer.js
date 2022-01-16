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
    const params = useParams();

    useEffect(() => {
        const getItem = fetch('../products.json')
        .then((res) => {
            return res.json()
        })
        
        getItem.then((products) => {
            setTimeout(() => {
                console.log("Productos: ", products)
                const item = products.find((product) => product.id === params.id)
                setItem(item)
                setLoading(false)
            }, 500);
        })
        .catch(error => {
            console.log(`Este fue el error: ${error}`);
        });
        // eslint-disable-next-line
    },[]);
    
    return (
        loading ? 
        (
        <div>
            <ClipLoader loading={loading} css={override} size={60} />
        </div>
        ) : (
            <div>
                <ItemDetail item={item} />
            </div>
        )
    )
}

export default ItemDetailContainer
