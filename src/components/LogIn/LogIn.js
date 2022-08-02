import React, { useState } from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import LogInContainer from '../LogInContainer/LogInContainer';
import Home from '../Home/Home';

import app from "../../firebase/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth(app);

const LogIn = () => {
    const [usuarioGlobal, setUsuarioGlobal] = useState(null);

    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            setUsuarioGlobal(usuarioFirebase);
        } else{
            setUsuarioGlobal(null);
        }
    })

    return (
        <>
        {usuarioGlobal ? <Home/> : <LogInContainer/>}
        </>
    )
}

export default LogIn
