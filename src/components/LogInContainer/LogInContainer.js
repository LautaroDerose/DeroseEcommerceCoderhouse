import React from 'react'
import { useState, useContext } from 'react'
import db from "../../firebase/firebase";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

const auth = getAuth(db);

const LogInContainer = () => {
    const [enRegistro, setEnRegistro] = useState(false);
   

    // async function submitHandler(e) {
    const submitHandler = async(e) => {
        e.preventDefault();
        const email = e.target.formEmail.value
        const password = e.target.formPassword.value
        console.log(email, password)

        if(enRegistro){
            // const usuario = await createUserWithEmailAndPassword(auth, email, password);
            await createUserWithEmailAndPassword(auth, email, password);
        } else {
            // signInWithEmailAndPassword(auth, email, password);
            await signInWithEmailAndPassword(auth, email, password);
        }
    }


    return (
        <div>
            <div>
                <h2>{enRegistro ? "Registrate" : "Inicia Sesion"}</h2>
                
                <form onSubmit={submitHandler}>

                    <label htmlFor="nombre">Ingrese su nombre</label>
                    <input type="text" placeholder="Escribe tu nombre" maxLength="15" name="nombre" id="nombre" />

                    <label htmlFor="email">Ingrese su email</label>
                    <input type="email" name="" id="formEmail" placeholder="ejemplo@unMail.com" />

                    <label htmlFor="password">Ingrese su contrasena</label>
                    <input type="password" placeholder="Escribe tu contrasena" id="formPassword"/>

                    {/* <input type="checkbox" name="" id=""  />Check me put */}
                    
                    <button type="submit">
                        {enRegistro ? "Registrate" : "Inicia Sesion"}
                    </button>
                    <button type="submit" onClick={()=> setEnRegistro(!enRegistro)}>
                        {enRegistro ? "¿Ya tienes cuenta? Inicia Sesion" : "¿No tienes cuenta? Registrate"}
                    </button>

                    

                    {/* <input type="checkbox" name="" id=""  />Hombre
                    <input type="checkbox" name="" id=""  />Mujer

                    <input type="radio" name="" id=""  />sarasa
                    <input type="radio" name="" id=""  />lalala

                    <input type="button" value="Enviar" />
                    <input type="submit" value="Enviar Consulta" />

                    <select name="" id="" placeholder="elige el pais">
                        <option value="Mexico">Mexico</option>
                        <option value="Peru">Peru</option>
                        <option value="Argentina">Argentina</option>
                    </select>

                    <input type="color" name="" id=""/>
                    <input type="range" name="" id=""/>
                    
 */}
                </form>
            </div>
        </div>
    )
}

export default LogInContainer
