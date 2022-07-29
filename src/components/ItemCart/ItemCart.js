import React from 'react'
import { useCartContext } from '../../context/CartContext'
import "./ItemCart.css"

const ItemCart = ({ product }) => {
    const {removeProduct} = useCartContext();
    return (
        <div className="itemCart">
            <img src={product.image} alt={product.brand}/>
            <div className="itemCart-detail">
                <h1>Nombre: {product.brand} </h1>
                <h2>Cantidad: {product.quantity}</h2>
                <p>Precio u.: {product.price}</p>
                <p>subtotal: $ {product.quantity * product.price}  </p>
                <button onClick={()=> removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart