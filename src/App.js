import React from 'react';
import './App.css';
import Navbar from './components/headerFolder/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import { ListItem } from '@mui/material';


function App() {
  

  return (
     <>
     <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="to Lautaro's e-commerce"/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<AboutUs/>} />
          {/* <Route path='/cart' element={} /> */}
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          {/* <Route path='/' element={} /> */}
        </Routes>
         
        {/* <ItemDetailContainer/>       */}
     </BrowserRouter>
     </>
  );
}

export default App;
