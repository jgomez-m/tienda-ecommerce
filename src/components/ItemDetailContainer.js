import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { ItemDetail } from './ItemDetail';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState({})
    const [color, setColor] = useState("#ffffff");
    
    useEffect(() => {
        const item =
            {
                id: "1",
                title: "Titulo 1",
                description: "Description",
                price: "100"
            }
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => resolve(item),2000);
          });

        getItem
            .then((res) => {
                setLoading(false);
                setItem(res);
            })
            .catch(error => {
                console.log(`Este fue el error: ${error}`);
            });
    },[]);
    
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
