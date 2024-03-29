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
// import LogInContainer from './components/LogInContainer/LogInContainer';
import app from "./firebase/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"

import { AuthContext } from './context/AuthContext';
// import PruebaModal from './components/PruebaModal/PruebaModal';

// import { Register } from './components/Register/Register';
const auth = getAuth(app);

function App() {

  const [mostrar, setMostrar] = useState(false);

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            setUsuarioGlobal(usuarioFirebase);
            setMostrar(true);
        } else{
            setUsuarioGlobal(null);
            setMostrar(false);
        }
    })

  return (
    <>
      
      <BrowserRouter>
        <AuthContext.Provider value={{mostrar, setMostrar}}>
          <CartProvider>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home greeting=" Amiguero"/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenido"/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<AboutUs/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/itemListContainer' element={<ItemListContainer/>} />
              <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
              {/* <Route path='/home' element={<Home/>} /> */}
            </Routes>
          </CartProvider>
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;