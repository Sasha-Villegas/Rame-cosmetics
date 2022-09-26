import React from 'react';
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({producto, item}) => {

const [count, setCount] = useState(0); //Genero un estado para almacenar la cantidad seleccionada en ItemCount
const [cargar, setCargar] = useState(false) //Genero un estado para condicionar la carga de mi carrito.
const [mostrar, setMostrar] = useState(false) //Genero un estado para renderizar condicionalmente
const {addCarrito} = useContext(CartContext) //Importo mi función global para agregar al carrito


//Genero este useEffect, para enviar el producto, la cantidad y el stock restante
useEffect(()=>{
  setTimeout(()=>{
    count != 0 && addCarrito(producto, count, (producto.stock - count))
  }, 100)
},[cargar])




const agregar = (cantidad) => {
  setCount(cantidad); //Almaceno la cantidad seleccionada por el usuario
  setMostrar(true); //Renderizo condicionalmente los botones para seguir comprando, más o terminar
  cargar ? setCargar(false) : setCargar(true) //Cambio el estado, para ejecutar el useEffect

}
  return(
    <>
    <div className="product-duplicado">
          <h2>{item.title}</h2>
          <img  src={item.img} alt={item.name} />
          <h3>${item.precio}</h3>
           {/* Muestro u Oculto condicionalmente el ItemCount */}
      {!mostrar && <ItemCount stock={producto.stock - count} agregar={agregar}/>}
      {/* Muestro u Oculto condicionalmente botones adicionales */}
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