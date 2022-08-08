import React from 'react'
import {FaUserCircle, FaRegBell} from "react-icons/fa";
import {getAuth, signOut} from "firebase/auth"
import app from '../../firebase/firebase' 

const auth = getAuth(app);

const NavLogContent = () => {
    return (
        <>
        <div className="nav-log">
                    <button className="btn-log"><FaRegBell/></button>
                    <button className="btn-log"><FaUserCircle/></button> <button className="btn-cerrarSesion" onClick={()=> signOut(auth)}>Cerrar sesion</button>
        </div>
        </>
    )
}

export default NavLogContent
