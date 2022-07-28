import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import product from"../../assets/product.png"
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from '@firebase/firestore';

export const ItemListContainer = ({greeting}) => {
    
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
            <div className="greeting-container">
                <div className="greeting-text-container">
                    <div className="greeting-text-box">
                        <h1 className="greeting-title">WELCOME</h1>
                        <span className="greeting-subtitle">{greeting}</span>
                    </div>
                    <br></br>
                    <div className="greeting-btns">
                        <button className="all-btn">Ver todos los productos</button>
                        <button className="off-btn">Ofertas de la semana</button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={product} className="product-image" alt={product.modelo}></img>
                </div>
            </div>
            <div className="list-gallery">
                <div className="item-container">
                    {loading ? <p>Cargando...</p> : <ItemList products={products} /> }
                </div>       
            </div>
        </>
    )
}

export default ItemListContainer
