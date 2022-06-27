import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./navbar.css"
import NavLogContent from "./NavLogContent";

const menuItems = [
    {
        id:1,
        label:"Home"
    },
    {
        id:2,
        label:"About us"
    },
    {
        id:3,
        label:"Products"
    },
    {
        id:4,
        label:"Contact"
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
                <h3>Logo</h3>
                <nav ref={navRef} >

                        {
                            menuItems.map((item)=> (
                                <a href="/#" key={item.id} >{item.label}</a>
                            ))
                        }

                        {/* <a href="/#">Home</a>
                        <a href="/#">About Us</a>
                        <a href="/#">Products</a>
                        <a href="/#">Contact</a> */}
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