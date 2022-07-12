import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import product from"../../assets/product.png"
import { ItemList } from '../ItemList/ItemList'
import {getData, getProds} from '../../mocks/fakeApi'
import { useParams } from 'react-router'


export const ItemListContainer = ({greeting}) => {
    
    

    const [productList, setProductList]= useState([])

    const [loading,setLoading]= useState(true)

    const {categoryId} = useParams()

   

  useEffect(()=>{
      getData
        .then((result)=>setProductList(result))
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
    },[])
    
useEffect(()=>{
    getProds(categoryId)
      .then((result) =>{
          setProductList(result)
      })
      .catch((error) =>{
          console.log(error)
        })
      .finally(() =>{
          setLoading(false)
        })
  },[categoryId])

//   useEffect(()=>{
//     getProds(detailId)
//       .then((result)=>setProductList(result))
//       .catch((error)=>console.log(error))
//       .finally(()=> setLoading(false))
//   },[detailId])


  console.log(productList)

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
                {/* LISTADO DE PRODUCTOS */}
                <div className="item-container">
                    {loading ? <p>Cargando...</p> : <ItemList productList={productList} /> }
                  
                </div>
                
                   
            </div>
        </>
    )
}

export default ItemListContainer
