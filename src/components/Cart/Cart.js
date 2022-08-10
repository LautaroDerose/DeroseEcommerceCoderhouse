import React, {useContext, useState} from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';
import app from '../../firebase/firebase' 
import {getAuth, signOut} from "firebase/auth"
import "./cart.css"

const auth = getAuth(app);

const Cart = () => {
    
    const [goToCheckOut, setGoToCheckOut ] = useState(false)
    const {mostrar, setMostrar} = useContext(AuthContext)
    const { cart, totalPrice } = useCartContext();

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
        email:"",
        phone:"",
        dni:"",
    })

    const handleInputChange = (e) => {
        
        // console.log(e.target.value)
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

       const order = {        
        buyer: datos,
        items: cart.map(product => ({ id: product.id, name: product.brand, price: product.price, quantity: product.quantity})),
        date: serverTimestamp(),
        state:"generada",
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => alert("Su numero de orden de compra es:  " + (id)))       
    }

    if(cart.length === 0){
        return (
            <div>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer Compras</Link>
            </div>
        )
    }

    return(
        
        <>
        
           <div className="cart-body">
           <div>
           {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
           </div>
            
            <p className="totalP">Total: ${totalPrice()} </p>
            <br></br>
            {/* <Link  className="finish-buy" to='/' onClick={handleClick} >Confirmar Compra</Link> */}
            {/* En lugar de enviar al home, poner alert: "su compra ha sido realizada con exito" */}
            <button className="btn-extra" onClick={ ()=> setGoToCheckOut(true)}>Siguiente</button>
            {/* <CheckOut/> */}

            { goToCheckOut === true && (

                <form >                                        
                <div className="form-container">
                    <div className="dobleInput">
                    <input className="inputLog" type="text" placeholder="Nombre(s)*" maxLength="15" name="name" id="name"  onChange={handleInputChange} required/>
                    <input className="inputLog" type="text" placeholder="Apellido(s)*" maxLength="15" name="surname" id="surname" onChange={handleInputChange} required />
                    </div>

                    <input className="inputLog" type="text" placeholder="Calle *" maxLength="30" name="street" id="street" onChange={handleInputChange} required />

                    <div className="dobleInput">
                    <input className="inputLog" type="text" placeholder="Numero *" maxLength="15" name="number" id="number" onChange={handleInputChange} required />
                    <input className="inputLog" type="text" placeholder="Piso" maxLength="15" name="flat" id="flat" onChange={handleInputChange} />
                    </div>

                    <div className="dobleInput">
                    <input className="inputLog" type="text" placeholder="Departamento" maxLength="15" name="departament" id="departament" onChange={handleInputChange} required />
                    <input className="inputLog" type="text" placeholder="Codigo Postal *" maxLength="15" name="postalCode" id="postalCode" onChange={handleInputChange}/>
                    </div>

                    <div className="dobleInput">
                    <input className="inputLog" type="text" placeholder="Provincia" maxLength="25" name="provincia" id="provincia" onChange={handleInputChange} required />
                    <input className="inputLog" type="text" placeholder="Localidad *" maxLength="25" name="location" id="location"  onChange={handleInputChange}/>
                    </div>
                    <div>
                            <h2>Informacion de contacto</h2>
                            <span>Usaremos tus datos para informarte sobre la entrega</span>

                            <input className="inputLog" type="email" name="email" id="email" placeholder="correo electronico *" onChange={handleInputChange} required />

                            <input className="inputLog" type="text" name="phone" id="phone" placeholder="Telefono (8 a 15 digitos)*" onChange={handleInputChange} required />
                            <span>Solo te llamaremos si tenemos alguna duda sobre el epdido</span>

                            <input className="inputLog" type="text" name="dni" id="dni" placeholder="DNI (ej. 12345678) *" onChange={handleInputChange}  required />
                            
                        </div>
                </div>
                </form>
                       )  }
                
                <button className="btn-extra" to="/" onClick={ handleClick}>Finalizar Compra</button>

                

                


            {/* <button className="finish-buy" onClick={usuarioGlobal ? {handleClick} : <LogInContainer/>}>Confirmar compra</button> */}
           </div>
        </>
    )
}

export default Cart
