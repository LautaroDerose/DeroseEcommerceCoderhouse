import React from 'react'
import {FaBars, FaTimes, FaCartPlus, FaUserCircle, FaRegBell} from "react-icons/fa";
import CartWidget from '../CartWidget';

const NavLogContent = () => {
    return (
        <div className="nav-log">
                    <CartWidget/> 
                    <button className="btn-log"><FaRegBell/></button>
                    <button className="btn-log"><FaUserCircle/></button> 
        </div>
    )
}

export default NavLogContent
