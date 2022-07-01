import React from 'react';
import './App.css';
 import Navbar from './components/headerFolder/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
 import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  

  return (
  <React.Fragment>
      <Navbar/>
      <ItemListContainer greeting="to Lautaro's e-commerce"/>   
      <ItemDetailContainer/>      
</React.Fragment>
  );
}

export default App;
