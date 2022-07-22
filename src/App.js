import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/headerFolder/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';


import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  

  return (
    <>
      <BrowserRouter>
          <CartProvider>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="to Lautaro's e-commerce"/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<AboutUs/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
              
            </Routes>
          </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
