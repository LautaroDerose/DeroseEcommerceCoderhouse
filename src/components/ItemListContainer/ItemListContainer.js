import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from '@firebase/firestore';
import AboutUs from '../AboutUs/AboutUs'
import Review from '../Review/Review'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

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
        {/* <PruebaModal/> */}
            <section className="home" id="home">
                <div className="content">
                    <h3>Welcome</h3>
                    <span>to ecommerce shop</span>
                    <span>{greeting}</span>
                    <p>orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor .</p>
                    <a href="#" className="btn-extra">Comprar ahora</a>
                </div>
            </section>
            <div className="list-gallery">
                <div className="item-container">
                    {loading ? <p>Cargando...</p> : <ItemList products={products} /> }
                </div>       
            </div>
        <AboutUs/>
        <Review/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default ItemListContainer
