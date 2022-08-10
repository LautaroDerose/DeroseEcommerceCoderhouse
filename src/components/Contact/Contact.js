import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import "./Contact.css"

import app from "../../firebase/firebase"
import {getFirestore, collection, addDoc } from "firebase/firestore"

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
    color: "#E85A4F",
}

const Contact = () => {
    const {
        errors, 
        // loading, 
        // response, 
        handleBlur, 
        // handleChange, 
        // handleSubmit
    } = useForm(initialForm, validationsForm);

    const valorInicial = {
        name: "",
        email:"",
        subject:"",
        comments:"",
    }; 

    const [usuarioComments, setUsuarioComments] = useState(valorInicial);
    const handleChange = (e) => {
        // handleChange(e);
        const {name, value} = e.target;
        setUsuarioComments({...usuarioComments, [name]:value});
    }
    const handleSubmit = async(e) =>{
        // handleSubmit(e);
        e.preventDefault();
        try {
            await addDoc(collection(db,'comments'),{ 
                ...usuarioComments
            })
        } catch (error) {
            console.log(error)
        }
        setUsuarioComments({...valorInicial});
    }

    return (
        <section className="contact">
            <div >
                <h1 className="heading"><span>Contact </span>us</h1>
                <div className="row">
                    <form onSubmit={ handleSubmit} className="form-container">
                        
                        <input 
                        className="form-name box" type="text" name="name" placeholder="Escribe tu nombre" onBlur={handleBlur} onChange={handleChange} value={ usuarioComments.name} required />
                        {errors.name && <p style = {stylesError}>{errors.name}</p>}

                        <input 
                        className="form-email box" type="email" name="email" placeholder="Escribe tu email" onBlur={handleBlur} onChange={handleChange} value={ usuarioComments.email} required/>
                        {errors.email && <p style = {stylesError}>{errors.email}</p>}

                        <input 
                        className="form-asunto box" type="text" name="subject" placeholder="Asunto a tratar" onBlur={handleBlur} onChange={handleChange} value={ usuarioComments.subject} required/>
                        {errors.subject && <p style = {stylesError}>{errors.subject}</p>}

                        <textarea 
                        className="form-textarea box" name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios" onBlur={handleBlur} onChange={handleChange} value={ usuarioComments.comments} required></textarea>   
                        {errors.comments && <p style = {stylesError}>{errors.comments}</p>}
                    
                        <input className= " btn-extra btn-enviarForm" type="submit" value="Enviar"/>
                        
                    </form>
                    <div className="contact-image-container">
                        <img src="https://i.postimg.cc/hvwS6dr2/undraw-Profile-data-re-v81r.png" alt="profile-data" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
