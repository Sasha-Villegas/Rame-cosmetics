import React from 'react';
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({producto, item}) => {

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
          <h2>{item.title}</h2>
          <img  src={item.img} alt={item.name} />
          <h3>${item.precio}</h3>
          
      {!mostrar && <ItemCount stock={producto.stock - count} agregar={agregar}/>}
     
      {mostrar && <div className="botonesFinales">
      <Link to={`/cart`}><button className="boton">Finish buying</button></Link>
      <Link to={`/`}><button className="boton">Keep buying</button></Link>
      <button onClick={()=>{setMostrar(false)}} className="boton">Add more</button>
      </div>}
    </div>
    </>
  )
}

export default ItemDetail