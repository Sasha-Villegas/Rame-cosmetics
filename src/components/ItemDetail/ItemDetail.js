import React from 'react';
import "../ItemCount/ItemCount.css";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";



const ItemDetail = ({producto}) => {

const [count, setCount] = useState(0); 
const [cargar, setCargar] = useState(false) 
const [mostrar, setMostrar] = useState(false) 
const {addCarrito} = useContext(CartContext) 



useEffect(()=>{
  setTimeout(()=>{
    count != 0 && addCarrito(producto, count, (producto.stock - count))
  }, 100)
},[cargar])




const agregar = (cantidad) => {
  setCount(cantidad); 
  setMostrar(true); 
  cargar ? setCargar(false) : setCargar(true) 

}
  return(
    <>
    <div className="product-duplicado">
      <div className= "producto">
          <h2> {producto.title} </h2>
          <img  src={producto.img} alt={producto.name} />
          <h3>${producto.precio} USD</h3>
      </div>  
        
      {!mostrar && <ItemCount stock={producto.stock - count} agregar={agregar}/>}
     
      {mostrar && <div className="ItemCountButton">
      <Link to={`/cart`}><button className="ItemCountButton">Finish buying</button></Link>
      <Link to={`/`}><button className="ItemCountButton">Keep buying</button></Link>
      <button onClick={()=>{setMostrar(false)}} className="ItemCountButton">Add more</button>
      </div>}
    </div>
    </>
  )
}

export default ItemDetail