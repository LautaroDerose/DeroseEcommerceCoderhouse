import { useRef, useContext } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./navbar.css"
import NavLogContent from "./NavLogContent";
import {NavLink} from 'react-router-dom';
import PruebaModal from "../PruebaModal/PruebaModal";
import { AuthContext } from "../../context/AuthContext";
import CartWidget   from '../CartWidget/CartWidget'

const menuItems = [
    {
        id:1,
        label:"Home",
        toLink:"/home"
    },
    {
        id:2,
        label:"About us",
        toLink:"/about"
    },
    // {
    //     id:3,
    //     label:"Products",
    //     toLink:"/products"
    // },
    {
        id:4,
        label:"Contact",
        toLink:"/contact"
    },
    {
        id:5,
        label:"televisores",
        toLink:"/category/televisores"
    },
    {
        id:6,
        label:"celulares",
        toLink:"/category/celulares"
    },
    {
        id:7,
        label:"notebooks",
        toLink:"/category/notebooks"
    }
]




function Navbar() {
    const {mostrar, setMostrar} = useContext(AuthContext)

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


    return(
        <header className="nav-header">
            <div className="promo">
                    <span>Estas son las ofertas de la semana 80% OFF por el dia del Padre</span>
            </div>

            <div className="nav-general">
                <NavLink className="logo" to='/'><h3 className="logo">Logo</h3></NavLink>
                <nav ref={navRef} >
                    {
                        menuItems.map((item)=> (
                            <NavLink to={item.toLink} key={item.id} >{item.label}</NavLink>     ))
                    }
                    {/* <Dropdown title="Categories" items={menuItems} multiSelect/> */}
                    
                    <button className="nav-btn nav-close-btn"onClick={showNavbar}><FaTimes/></button>
                    <NavLink to="/cart"><CartWidget/></NavLink>

                </nav>
                {mostrar? 
                <NavLogContent/> : <PruebaModal/>}
                <button className="nav-btn"    onClick={showNavbar}><FaBars/></button>
            </div>
        </header>
    )
}


export default Navbar;