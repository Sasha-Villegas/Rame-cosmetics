import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import './components/Navbar/navbar.css';
import './components/ItemListContainer/itemlistc.css';
import Footer from './components/Footer/Footer.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
      <Routes className="App-content">
       <Route path='/' element= {<ItemListContainer/>} />
       <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
       <Route path='/item/:id' element={<ItemDetailContainer/>}/>
       <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
