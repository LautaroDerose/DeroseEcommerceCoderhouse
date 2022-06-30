import React from 'react'
import { useItemCount } from '../../hooks/useItemCount'
import "./ItemCount.css"

export const ItemCount = ({stock, name, onAdd}) => {
    
    const { handleValue, amount} = useItemCount(stock)

    return (
        <section className="itemCount-container">
            <div className="box">
                <div><h2>Contador de {name}</h2></div>
                <div className="btns-count">
                    <button className=" btn btn-count" disabled={amount<=1} onClick={()=>handleValue(-1)}>-</button>
                    <span className="span-count" >{amount}</span>
                    <button className="btn btn-count" disabled={amount>=stock} onClick={()=>handleValue(+1)}>+</button>
                </div>
                <div className="cart-container">
                    <button className="btn btn-onAdd" disabled={stock<=0} onClick={()=>onAdd(amount)}>
                    Agregar al Carrito</button>
                </div>
            </div>
                        
        </section>
    )
    
}

export default ItemCount
