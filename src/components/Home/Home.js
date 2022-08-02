import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

import app from '../../firebase/firebase' 
import {getAuth, signOut} from "firebase/auth"
const auth = getAuth(app);



const Home = () => {
    return (
        <>
        {/* <ItemListContainer/> */}
        <h4>Sesion iniciada</h4>
        <button onClick={()=> signOut(auth)}>Cerrar sesion</button>
        </>
    )
}

export default Home
