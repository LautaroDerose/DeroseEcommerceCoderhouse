import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import product from"../../assets/product.png"
import ItemCount from "../ItemCount/ItemCount"
import ItemCount2 from "../ItemCount2/ItemCount2"
import { ItemList } from '../ItemList/ItemList'
import {getData} from '../../mocks/fakeApi'

export const ItemListContainer = ({greeting}) => {
    
    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
    }

    const [productList, setProductList]= useState([])

    const [loading,setLoading]= useState(true)

   

  useEffect(()=>{
      getData
        .then((result)=>setProductList(result))
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
    },[])
    
  console.log(productList)

    return (
        <>    
            <div className="container">
                {/* Greetig y pagina principal */}
                <div className="text-container">
                    <div className="text-box">
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
                    <img src={product} className="product-image"></img>
                </div>
            </div>
            <div className="countAndList">
                {/* CONTADORES */}
                <div>
                    <ItemCount2 initial={1} stock={7} onAdd={onAdd} name={"productos.id"} />
                    
                </div>

                {/* LISTADO DE PRODUCTOS */}
                <div className="item-container">
                    {loading ? <p>Cargando...</p> : <ItemList productList={productList} /> }
                  
                </div>
                <div>
                    
                </div>
                    
            </div>
        </>
    )
}

export default ItemListContainer
