import React from 'react'
import {FaCartPlus} from "react-icons/fa";
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {totalProducts} = useCartContext();

    return (
        <>

            <button className="btn-log"><FaCartPlus/></button>
            <span>{totalProducts() || ''}</span>
        </>
        
    )
}

export default CartWidget
