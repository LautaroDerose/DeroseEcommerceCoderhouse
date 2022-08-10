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


const auth = getAuth(app);


const Home = ({greeting}) => {

    
    return (
        <>
            <a name="home" href=""></a>

        <section className="home" id="home">
                <div className="content">
                    <h3>Welcome</h3>
                    <span>to ecommerce shop</span>
                    <span>{greeting}</span>
                    <p>orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor .</p>
                    <a href="#anclaProducts" className="btn-extra">Comprar ahora</a>
                </div>
                
            </section>
       {/* <div className="inicio">
       <h4>Sesion iniciada </h4>
        <button className="btn-cerrarSesion" onClick={()=> signOut(auth)}>Cerrar sesion</button>
    </div> */}
    <a name="anclaProducts"></a>
    <ItemListContainer/>
       <AboutUs/>
        <Review/>
        <Contact/>
        <Footer/>
        
        </>
    )
}

export default Home
