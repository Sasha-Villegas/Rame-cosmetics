import React from "react";
import {useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../ItemCount/ItemCount.css"
import "./Cart.css";

const Cart = () => {

const {cart, clearCarrito, deleteCarrito} = useContext(CartContext)

const [total, setTotal] = useState("0")
const [actualizar, setActualizar] = useState(false)

useEffect(()=>{
setTotal((cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)))
},[actualizar])

const eliminarUno = (id) =>{
  deleteCarrito(id);
  !actualizar ? setActualizar(true) : setActualizar(false)
}

const eliminarTodo = () => {
  clearCarrito()
  !actualizar ? setActualizar(true) : setActualizar(false)
}

  return (
    <div className="cart">
      <h1>Shopping cart</h1>
        <div className="cart-body">
        
        
        {cart.map((item)=> (
            <div className="cart-product" key={item.id}>
                <img className="cart-img" src={item.img} alt={item.title}/>
                <h2 className="cart">{item.title}</h2>
                <h3 className="cart-category">{item.category}</h3>
                <div className="cart-unit">{item.cantidad}</div>
                <h3 className="cart-price">${item.precio}USD <span> /Unit</span></h3>
                <button className="ItemCountButton" onClick={() => (eliminarUno(item.id))}>Put off</button>

            </div>
        ))} 
        </div>

        {cart.length === 0 ? (
        <>
          <h2 className="cart-msm">There are no products in your cart</h2>
          <Link to={`/`} className="ItemCountButton">Repurchase</Link>
        </> ) : 
        <>
          <div className="cart-total">TOTAL : ${total}USD .-</div>
          
        </>
        }
        <button className="ItemCountButton" onClick={eliminarTodo} > Empty cart</button>
    </div>
  )
}

export default Cart