import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./navbar.css"
import NavLogContent from "./NavLogContent";
import {NavLink} from 'react-router-dom';
const menuItems = [
    {
        id:1,
        label:"Home",
        toLink:"/"
    },
    {
        id:2,
        label:"About us",
        toLink:"/about"
    },
    {
        id:3,
        label:"Products",
        toLink:"/products"
    },
    {
        id:4,
        label:"Contact",
        toLink:"/contact"
    },
    {
        id:5,
        label:"Cat01",
        toLink:"/category/cat01"
    },
    {
        id:6,
        label:"Cat02",
        toLink:"/category/cat02"
    },
    {
        id:7,
        label:"Cat04",
        toLink:"/category/cat04"
    }
]

function Navbar() {
    const navRef = useRef();
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


    return(
        <header>
            <div className="promo">
                    <span>Estas son las ofertas de la semana 80% OFF por el dia del Padre</span>
            </div>
            
            <div className="nav-general">
                <NavLink to='/'><h3>Logo</h3></NavLink>
                <nav ref={navRef} >

                        {
                            menuItems.map((item)=> (
                                <NavLink to={item.toLink} key={item.id} >{item.label}</NavLink>
                            ))
                        }
                        <button className="nav-btn nav-close-btn"    onClick={showNavbar}>
                            <FaTimes/>
                        </button>
                </nav>
                <NavLogContent/>
                
                <button className="nav-btn"    onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
        </header>
    )
}

export default Navbar;