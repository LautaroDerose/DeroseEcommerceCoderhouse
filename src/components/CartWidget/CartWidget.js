import React from 'react'
import {FaCartPlus} from "react-icons/fa";
import { useCartContext } from '../../context/CartContext';
import "./CartWidget.css"

const CartWidget = () => {
    const {totalProducts} = useCartContext();

    return (
        <>
                <button className="btn-log"><FaCartPlus className="FaCartPlus"/></button>
                {
                    totalProducts() > 0 ?
                    <span className="badge badge-warning" id="contador_navbar">{totalProducts() || ''}</span>
                    :
                    <span></span>
                }
        </>
    )
}

export default CartWidget
