import React, {useState, useEffect} from 'react'
import "./ItemCount2.css"

export const ItemCount2 = ({initial, stock, onAdd}) => {
    const[count, setCount] = useState(parseInt(initial) );

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <section className="itemCount-container">
            <div className="box">
                {/* <div><h2>Contador de {name}</h2></div> */}
                <div className="btns-count">
                    <button className="btn-count" disabled={count<=1} onClick={decrease}>-</button>
                    <span className="span-count">{count}</span>
                    <button className="btn btn-count" disabled={count>= stock} onClick={increase}>+</button>
                </div>
                <div className="cart-container">
                    <button className="btn-onAdd" disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
                </div>
            </div>

        </section>
       
    )
}
export default ItemCount2
