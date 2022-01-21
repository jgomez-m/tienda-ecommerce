import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase/config';

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
        const getItem = async() => {
            const snapShot = await getDoc(doc(db, 'product-list', params.id))
            if (snapShot.exists()) {
                setItem({...snapShot.data(), id: snapShot.id})
                setLoading(false)
                console.log("Item", item)
            }
        }
        getItem()
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
