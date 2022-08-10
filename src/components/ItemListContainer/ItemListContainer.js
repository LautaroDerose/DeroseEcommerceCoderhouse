import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from '@firebase/firestore';

export const ItemListContainer = () => {
    
    const [products, setProducts] = useState([]);
    const [loading,setLoading]= useState(true);
    const {categoryId} = useParams()

    useEffect(() => {

        const q = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products');
        
        getDocs(q)
            .then(result => {
                const lista = result.docs.map(doc => {
                    return{
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setProducts(lista)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    },[categoryId])

    return (
        <>    
            <div className="list-gallery">
                <div className="item-container">
                    {loading ? <p>Cargando...</p> : <ItemList products={products} /> }
                </div>       
            </div>
        
        </>
    )
}

export default ItemListContainer
