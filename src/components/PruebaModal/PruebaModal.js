import React, {useState} from 'react'
import {Modal, Button,} from '@mui/material';
import './PruebaModal.css'
import db from "../../firebase/firebase";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { FaRegTimesCircle, FaUserAlt } from 'react-icons/fa';

const auth = getAuth(db);
    
const PruebaModal = () => {

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

    const [modal, setModal] = useState(false);

    const abrirCerarModal = ()=>{
        setModal(!modal);
    }

    

    return (
        <div className="modalContainer">
            <Button className="btn-openModal" onClick={()=>abrirCerarModal()}>LogIn / SingIn</Button>
            <Modal open={modal} onClose={abrirCerarModal}>
                {/* {body}             */}
            <div className="modal">
                
                <div className="form-heading">
                    <h1><FaUserAlt/>  Formulario</h1>
                    <buttton className="btn-closeForm" onClick={()=>abrirCerarModal()} ><FaRegTimesCircle/></buttton>
                </div>
                <br/>
                <h2>{enRegistro ? "Registrate" : "Inicia Sesion"}</h2>
                <form onSubmit={submitHandler}>

                        {/* <label htmlFor="nombre">Ingrese su nombre</label> */}
                        <input className="inputLog" type="text" placeholder="Escribe tu nombre" maxLength="15" name="nombre" id="nombre" />

                        {/* <label htmlFor="email">Ingrese su email</label> */}
                        <input className="inputLog" type="email" name="" id="formEmail" placeholder="ejemplo@unMail.com" />

                        {/* <label htmlFor="password">Ingrese su contrasena</label> */}
                        <input className="inputLog" type="password" placeholder="Escribe tu contrasena" id="formPassword"/>
                        
                        <button type="submit" className="btn-extra">
                            {enRegistro ? "Registrate" : "Inicia Sesion"}
                        </button>
                        <br/>
                        <button type="submit" onClick={()=> setEnRegistro(!enRegistro)}>
                            {enRegistro ? "¿Ya tienes cuenta? Inicia Sesion" : "¿No tienes cuenta? Registrate"}
                        </button>
                </form>
            </div>
            </Modal>
        </div>
    )
}

export default PruebaModal
