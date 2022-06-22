import React from 'react';
import './App.css';
import Navbar from './components/headerFolder/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
  <React.Fragment>
      <Navbar/>
      <ItemListContainer greeting="to Lautaro's e-commerce"/>
  </React.Fragment>
  );
}

export default App;
