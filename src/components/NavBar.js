import { useRef } from "react";
import {FaBars, FaTimes, FaCartPlus, FaUserCircle, FaRegBell} from "react-icons/fa";
import "../Styles/navbar.css";


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
                        <a href="/#">Home</a>
                        <a href="/#">About Us</a>
                        <a href="/#">Products</a>
                        <a href="/#">Contact</a>
                        <button className="nav-btn nav-close-btn"    onClick={showNavbar}>
                            <FaTimes/>
                        </button>
                </nav>
                <div className="nav-log">
                    <button className="btn-log"><FaCartPlus/></button> 
                    <button className="btn-log"><FaRegBell/></button>
                    <button className="btn-log"><FaUserCircle/></button> 
                </div> 
                <button className="nav-btn"    onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
        </header>
    )
}

export default Navbar;