import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import "./Home.css"

import app from '../../firebase/firebase' 
import {getAuth, signOut} from "firebase/auth"

import {useAuth} from "../../context/AuthContext"
import AboutUs from '../AboutUs/AboutUs'
import Review from '../Review/Review'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import PruebaModal from '../PruebaModal/PruebaModal'
//la linea de arriba viene de authContext

const auth = getAuth(app);



const Home = () => {

    
    return (
        <>
        {/* <ItemListContainer/> */}
       <div className="inicio">
       <h4>Sesion iniciada </h4>
        <button className="btn-cerrarSesion" onClick={()=> signOut(auth)}>Cerrar sesion</button>
       </div>
        
        {/* <section className="home" id="home">
            <div className="content">
                <h3>Un Titulazo</h3>
                <span>El mejor subtitulo de tu ecommerce</span>
                <p>orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor .</p>
                <a href="#" className="btn-extra">Shop Now</a>
            </div>
        </section> */}
        {/* <ItemListContainer/> */}
        
        </>
    )
}

export default Home
