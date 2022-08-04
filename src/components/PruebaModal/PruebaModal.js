import React, {useState} from 'react'
import {Modal, TextField, Button, FormControl} from '@mui/material';
import './PruebaModal.css'
import db from "../../firebase/firebase";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

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

    const body= (
        <div className="modal">
            <div>
                <h2>Formulario</h2>
            </div>
            {/* <label htmlFor="nombre">Ingrese su nombre</label>
                <input type="text" placeholder="Escribe tu nombre" maxLength="15" name="nombre" id="nombre" />
                <br/>
                <label htmlFor="apellido">Ingrese su Apellido</label>
                <input type="text" placeholder="Escribe tu Apellido" id="formText"/>
                <br/>
                <label htmlFor="email">Ingrese su email</label>
                <input type="email" name="" id="formEmail" placeholder="ejemplo@unMail.com" />
            <br/><br/> */}
            <TextField label="nombre" className="textField"  />
            <br/>
            <TextField label="apellido" className="textField"  />
            <br/>
            <TextField label="email" className="textField"  />
            <br/><br/>
            {/* ---------------- */}
            <h2>{enRegistro ? "Registrate" : "Inicia Sesion"}</h2>
            <form onSubmit={submitHandler}>

                    <label htmlFor="nombre">Ingrese su nombre</label>
                    <input type="text" placeholder="Escribe tu nombre" maxLength="15" name="nombre" id="nombre" />

                    <label htmlFor="email">Ingrese su email</label>
                    <input type="email" name="" id="formEmail" placeholder="ejemplo@unMail.com" />

                    <label htmlFor="password">Ingrese su contrasena</label>
                    <input type="password" placeholder="Escribe tu contrasena" id="formPassword"/>
                    
                    <button type="submit">
                        {enRegistro ? "Registrate" : "Inicia Sesion"}
                    </button>
                    <button type="submit" onClick={()=> setEnRegistro(!enRegistro)}>
                        {enRegistro ? "¿Ya tienes cuenta? Inicia Sesion" : "¿No tienes cuenta? Registrate"}
                    </button>
                <form/>
            {/* -------------------- */}

            <div>
                <Button>Enviar</Button>
                <Button onClick={()=>abrirCerarModal()} >Cancelar</Button>
            </div>
        </form></div>
    )
    

    return (
        <div className="modalContainer">
            <Button className="btn-openModal" onClick={()=>abrirCerarModal()}>Abrir modal</Button>

            <Modal open={modal} onClose={abrirCerarModal}>
                {body}            
                
            </Modal>
        </div>
    )
}

export default PruebaModal
