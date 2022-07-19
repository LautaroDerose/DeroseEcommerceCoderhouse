import React from 'react'
import { useCartContext } from '../../context/CartContext'


const ItemCart = ({ product }) => {
    const {removeProduct} = useCartContext();
    return (
        <div className="itemCart">
            <img src={product.img} alt={product.title}/>
            <div>
                <p>Nombre: {product.marca} {product.modelo} </p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: {product.price}</p>
                <p>subtotal: $ {product.quantity * product.price}  </p>
                <button onClick={()=> removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart
