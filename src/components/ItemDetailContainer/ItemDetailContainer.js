import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from "../../firebase/firebase"
import { doc, getDoc, collection } from '@firebase/firestore';


export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loaded, setLoaded] = useState(true)
    const { productId } = useParams();

    useEffect(() => {

        const productsCollection = collection(db, 'products')
        const refDoc = doc(productsCollection, productId)
        
        getDoc(refDoc)
        .then(result => {
            setProduct({
                id: result.id,
                ...result.data(),
            })
        })
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))
    }, [productId])

    return (
        <div>
            {loaded ? <p>Cargando...</p> : <ItemDetail product={product} />} 
        </div>
    );
}

export default ItemDetailContainer
