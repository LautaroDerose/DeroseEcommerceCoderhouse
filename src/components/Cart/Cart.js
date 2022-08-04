import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import LogInContainer from '../LogInContainer/LogInContainer';
import LogIn from '../LogIn/LogIn';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Fulano',
            email: 'FDetal@gmail.com',
            phone: '123456789',
            addres: 'asdasd'
        },
        items: cart.map(product => ({ id: product.id, name: product.brand, price: product.price, quantity: product.quantity})),

        date: serverTimestamp(),
        state:"generada",
        total: totalPrice(),
    }

    const handleClick = () => {

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }

    if(cart.length === 0){
        return (
            <div>
                <p>No hay elementos en el acrrito</p>
                <Link to='/'>Hacer Compras</Link>
            </div>
        )
    }

    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            
            <p className="totalP">Total: {totalPrice()} </p>
            <br></br>
            {/* <Link  className="finish-buy" to='/' onClick={handleClick} >Confirmar Compra</Link> */}
            {/* En lugar de enviar al home, poner alert: "su compra ha sido realizada con exito" */}
            <button className="finish-buy" onClick={handleClick}>Confirmar compra</button>
            {/* <button className="finish-buy" onClick={usuarioGlobal ? {handleClick} : <LogInContainer/>}>Confirmar compra</button> */}
        </>
    )

}

export default Cart
