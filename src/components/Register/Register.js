// import { useState } from 'react';
// import React from 'react'
// import {useAuth} from "../../context/AuthContext"
// import { useNavigate } from 'react-router-dom';


// export const Register = () => {
//     const {signUp} = useAuth();
//     const navigate = useNavigate()

//     const [user, setUser] = useState({
//         email: "",
//         password: "",
//     });

//     const handleChange = ({target:{name, value}}) => {
//      setUser({...user, [name]: value})
//     }

//     const handleSubmit = async(e) => {
//         e.preventDefault()
//         signUp(user.email, user.password);
       
//         // try {
//         //     await signUp(user.name, user.email, user.password);
//         //     navigate('/')
//         // } catch (error) {
//         //     console.log(error)
//         // }
//     }


//     return (
//         <>
//         <form onSubmit={handleSubmit}>

//             <label htmlFor="name">Ingrese su nombre</label>
//             <input type="text" placeholder="Escribe tu nombre" maxLength="15" name="name" id="name" />

//             <label htmlFor="email">Ingrese su email</label>
//             <input type="email" name="email" id="email" placeholder="ejemplo@unMail.com" onChange={handleChange}/>

//             <label htmlFor="password">Ingrese su contrasena</label>
//             <input type="password" placeholder="Escribe tu contrasena" id="pssword" onChange={handleChange}/>

//             <button>Register</button>

//         </form>
//         </>
//     )
// }
