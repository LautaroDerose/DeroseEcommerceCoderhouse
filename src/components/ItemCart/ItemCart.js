import React from 'react'
import { useCartContext } from '../../context/CartContext'
import "./ItemCart.css"

const ItemCart = ({ product }) => {
    const {removeProduct} = useCartContext();
    return (
       <div className="itemCart-body">
            <div className="itemCart">
            <div className="image-container">
            <img src={product.image} alt={product.brand}/>
            </div>
            <div className="itemCart-detail">
                <h3>Nombre: {product.model} </h3>
                <h4>Cantidad: {product.quantity}</h4>
                <p>Precio u.: {product.price}</p>
                <p>subtotal: $ {product.quantity * product.price}  </p>
                <button className="" onClick={()=> removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
       </div>
    )
}

export default ItemCart