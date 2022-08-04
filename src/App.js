import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/headerFolder/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home'
import LogInContainer from './components/LogInContainer/LogInContainer';
import app from "./firebase/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"

// import { AuthProvider } from './context/AuthContext';
// import { Register } from './components/Register/Register';
const auth = getAuth(app);

function App() {

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            setUsuarioGlobal(usuarioFirebase);
        } else{
            setUsuarioGlobal(null);
        }
    })

  return (
    <>
      {usuarioGlobal ? <Home correoUsuario = {usuarioGlobal.email} /> : <LogInContainer/>}
      <BrowserRouter>
        {/* <AuthProvider> */}
          <CartProvider>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="to Lautaro's e-commerce"/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<AboutUs/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
              {/* <Route path='/register' element={<Register/>}/> */}
              <Route path='/home' element={<Home/>} />
            </Routes>
          </CartProvider>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;