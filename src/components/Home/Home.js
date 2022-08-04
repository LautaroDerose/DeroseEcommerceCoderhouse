import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

import app from '../../firebase/firebase' 
import {getAuth, signOut} from "firebase/auth"

import {useAuth} from "../../context/AuthContext"
//la linea de arriba viene de authContext

const auth = getAuth(app);



const Home = () => {

    // const {user} = useAuth() 
//la linea de arriba viene de authContext
    return (
        <>
        {/* <ItemListContainer/> */}
        <h4>Sesion iniciada</h4>
        <button onClick={()=> signOut(auth)}>Cerrar sesion</button>
        </>
    )
}

export default Home
