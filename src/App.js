import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import './components/Navbar/navbar.css';
import './components/ItemListContainer/itemlistc.css';
import Footer from './components/Footer/Footer.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart.js";
import CartProvider from './Context/CartProvider';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
        <Navbar />
      <Routes className="App-content">
       <Route path='/' element= {<ItemListContainer/>} />
       <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
       <Route path='/item/:id' element={<ItemDetailContainer/>}/>
       <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>   
    </BrowserRouter>   
    </CartProvider>
 
  );
}

export default App;
