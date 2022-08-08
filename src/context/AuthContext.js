import { createContext, useContext, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import {auth} from '../firebase/firebase' 
import LogInContainer from "../components/LogInContainer/LogInContainer";

// export const AuthContext = createContext();
// // const initialAuth = null;

// // export const useAuth = () => {
// //     const context = useContext(AuthContext)
// //     if (!context) throw new Error('There is not auth provider')

// //     return context;
// // }

export const AuthContext = createContext({mostrar:false, setMostrar: ()=>
    {}
});

// export const AuthProvider = ({children}) => {




//     // const[auth,setAuth] = useState(initialAuth);

//     // const handleAuth = (e)=>{
//     //     if (auth) {
//     //         setAuth(null);
//     //     }else{
//     //         setAuth(true)
//     //     }
//     // }
//     // const data = {auth, handleAuth};

// // const signUp = (email, password) =>  {  createUserWithEmailAndPassword(auth, email, password) }
// const [usuarioGlobal, setUsuarioGlobal] = useState(null);

//    onAuthStateChanged(auth, (usuarioFirebase) => {
//         if (usuarioFirebase) {
//             setUsuarioGlobal(usuarioFirebase);
//         } else{
//             setUsuarioGlobal(null);
//         }
//     })

//     const data = (auth, usuarioGlobal)

//     return <AuthContext.Provider value={{ data }} >{children}</AuthContext.Provider>
// };

// export {AuthProvider}
// export default AuthContext;