import React from 'react'
import {FaUserCircle, FaRegBell} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavLogContent = () => {
    return (
        <div className="nav-log">
                    <NavLink to="/cart"><CartWidget/></NavLink>
                    <button className="btn-log"><FaRegBell/></button>
                    <button className="btn-log"><FaUserCircle/></button> 
        </div>
    )
}

export default NavLogContent
