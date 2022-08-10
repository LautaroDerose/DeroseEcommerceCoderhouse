import React, {useState} from 'react'
import {Modal} from '@mui/material'
import db from '../../../firebase/firebase'
import { getAuth } from '@firebase/auth'
import { FaRegTimesCircle, FaUserAlt } from 'react-icons/fa';
import './CheckOut.css'
import { addDoc, collection } from 'firebase/firestore';
import app from '../../../firebase/firebase';

const auth = getAuth(app);


const CheckOut = () => {

    const [datos, setDatos] = useState({
        name:"",
        surname:"",
        street:"",
        number:"",
        flat:"",
        departament:"",
        postalCode:"",
        provincia:"",
        location:"",
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const guardarDatos = async(e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'buyer'),{
                ...datos
            })
        console.log(...datos)
        } catch (error) {
            console.log(error)
        }
        setDatos({})        
    }


    const [modal, setModal] = useState(false);

    const abrirCerarModal = () =>{
        setModal(!modal)
    }


    return (
        <div className="CartFormBuyer-container">
            <button className="btn-openModal" onClick={()=>abrirCerarModal()}>Confirmar comprananan</button>
            <Modal open={modal} onClose={abrirCerarModal}>
                {/* {body}             */}
            <div className="modal">
                
                <div className="form-heading">
                    <h2>Completa los datos para realizar la compra</h2>
                    <button className="btn-closeForm" onClick={()=>abrirCerarModal()} ><FaRegTimesCircle/></button>
                </div>
                <br/>
                <form onSubmit={guardarDatos}>

                        
                        <div className="dobleInput">
                        <input className="inputLog" type="text" placeholder="Nombre(s)*" maxLength="15" name="name" id="name"  onChange={handleInputChange} required/>

                        <input className="inputLog" type="text" placeholder="Apellido(s)*" maxLength="15" name="surname" id="surname" onChange={handleInputChange} required />
                        </div>

                        <input className="inputLog" type="text" placeholder="Calle *" maxLength="15" name="street" id="street" onChange={handleInputChange} required />

                        <div className="dobleInput">
                        <input className="inputLog" type="text" placeholder="Numero *" maxLength="15" name="number" id="number" onChange={handleInputChange} required />
                        <input className="inputLog" type="text" placeholder="Piso" maxLength="15" name="flat" id="flat" onChange={handleInputChange} />
                        </div>
 
                        <div className="dobleInput">
                        <input className="inputLog" type="text" placeholder="Departamento" maxLength="15" name="departament" id="departament" onChange={handleInputChange} required />
                        <input className="inputLog" type="text" placeholder="Codigo Postal *" maxLength="15" name="postalCode" id="postalCode" onChange={handleInputChange}/>
                        </div>
 
                        <div className="dobleInput">
                        <input className="inputLog" type="text" placeholder="Provincia" maxLength="15" name="provincia" id="provincia" onChange={handleInputChange} required />
                        <input className="inputLog" type="text" placeholder="Localidad *" maxLength="15" name="location" id="location"  onChange={handleInputChange}/>
                        </div>

                        <button className="btn-extra" type="submit" >enviar</button>
                        <button className="btn-extra"  >Siguiente</button>
                        
                        {/* <h2>Informacion de contacto</h2>
                        <span>Usaremos tus datos para informarte sobre la entrega</span>

                        <input className="inputLog" type="email" name="email" id="email" placeholder="correo electronico *" />

                        <input className="inputLog" type="phone" name="phone" id="phone" placeholder="Telefono (8 a 15 digitos)*" />
                        <span>Solo te llamaremos si tenemos alguna duda sobre el epdido</span>

                        <input className="inputLog" type="email" name="email" id="email" placeholder="DNI (ej. 12345678) *" /> */}

                                            
                </form>
            </div>
            </Modal>
        </div>
    )
}

export default CheckOut
