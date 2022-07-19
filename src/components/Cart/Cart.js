import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if(cart.length === 0){
        return (
            <div>
                <p>No hay elementos en el acrrito</p>
                <Link to='/'>Hacer Compras</Link>
            </div>
        )
    }

    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>Total: {totalPrice()} </p>
        </>
    )

}

export default Cart
