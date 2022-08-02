import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import "./Contact.css"

import app from "../../firebase/firebase"
import {getFirestore, collection, addDoc } from "firebase/firestore"
// getDocs, doc, deleteDoc, getDoc, setDoc
const db = getFirestore(app)


const initialForm = {
    name: "",
    email:"",
    subject:"",
    comments:"",
}; 



const validationsForm = (form)=>{
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,500}$/;
    
    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido";
    }else if(!regexName.test(form.name.trim())){
        errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco"; 
    }
    
    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'Email' debe tener la siguiente estructura: nombre@unMail.com"; 
    }
    
    if (!form.subject.trim()) {
        errors.subject = "El campo 'Asunto a tratar' es requerido";
    }
    
    if (!form.comments.trim()) {
        errors.comments = "El campo 'Comentarios' es requerido";
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "El campo 'Comentarios' solo acepta 500 caracteres"; 
    }
    
    

   

    return errors;
};

let stylesError = {
    fontWeight: "bold",
    color: "#dc3545",
}



const Contact = () => {

    const {
        form, 
        errors, 
        // loading, 
        // response, 
        handleBlur, 
        handleChange, 
        handleSubmit
    } = useForm(initialForm, validationsForm);

    const valorInicial = {
        name: "",
        email:"",
        subject:"",
        comments:"",
    }; 

    const [usuarioGlobal, setUsuarioGlobal] = useState(valorInicial);

    const captureInputs = (e) => {
        handleChange(e);
        const {name, value} = e.target;
        setUsuarioGlobal({...usuarioGlobal, [name]:value});
    }

    const saveData = async(e) =>{
        handleSubmit(e);
        e.preventDefault();
        // console.log(usuarioGlobal)
        try {
            await addDoc(collection(db,'comments'),{ 
                ...usuarioGlobal
            })
        } catch (error) {
            console.log(error)
        }
        setUsuarioGlobal({...valorInicial});
    }

    return (
        <div className="contact-body">
            <div >
                <h1>Formlario de Contacto</h1>
                <form onSubmit={handleSubmit, saveData} className="form-container">
                    
                    <input 
                    className="form-name"
                    type="text" 
                    name="name" 
                    placeholder="Escribe tu nombre" 
                    onBlur={handleBlur} 
                    onChange={handleChange, captureInputs} 
                    value={form.name, usuarioGlobal.name} 
                    required
                    />
                    {errors.name && <p style = {stylesError}>{errors.name}</p>}

                    <input 
                    className="form-email"
                    type="email" 
                    name="email" 
                    placeholder="Escribe tu email" 
                    onBlur={handleBlur} 
                    onChange={handleChange, captureInputs} 
                    value={form.email, usuarioGlobal.email} 
                    required
                    />
                    {errors.email && <p style = {stylesError}>{errors.email}</p>}

                    <input 
                    className="form-asunto"
                    type="text" 
                    name="subject" 
                    placeholder="Asunto a tratar" 
                    onBlur={handleBlur} 
                    onChange={handleChange, captureInputs} 
                    value={form.subject, usuarioGlobal.subject} 
                    required
                    />
                    {errors.subject && <p style = {stylesError}>{errors.subject}</p>}


                    <textarea 
                    className="form-textarea"
                    name="comments" 
                    cols="50" 
                    rows="5" 
                    placeholder="Escribe tus comentarios"
                    onBlur={handleBlur} 
                    onChange={handleChange, captureInputs} 
                    value={form.comments, usuarioGlobal.comments} 
                    required
                    ></textarea>   
                    {errors.comments && <p style = {stylesError}>{errors.comments}</p>}
                 
                    <input
                    className="form-enviar"
                    type="submit"
                    value="Enviar"
                    />
                    


                </form>
            </div>
            
        </div>
    )
}

export default Contact
