import React from 'react'
import "./ItemListContainer.css"
import product from"../../assets/product.png"
import ItemCount from "../ItemCount/ItemCount"
import ItemCount2 from "../ItemCount2/ItemCount2"
import { ItemList } from '../ItemList/ItemList'
 
export const ItemListContainer = ({greeting}) => {
    
    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
    }

  
    
    
    return (
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

            {/* CONTADORES */}
            <div>
            <ItemCount stock={10} name="unProducto" onAdd={onAdd}/>
            {/* <ItemCount stock={9} name = "unProducto.id"/> */}
            </div>
            <div>
                <ItemCount2 initial={1} stock={7} onAdd={onAdd} />
            </div>

            {/* LISTADO DE PRODUCTOS */}

            {/* <ItemList productList={productList} /> */}
                
        </div>
    )
}

export default ItemListContainer
