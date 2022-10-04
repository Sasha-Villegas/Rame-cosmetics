import React from "react";
import {useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../ItemCount/ItemCount.css"
import "./Cart.css";
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';

import {collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {

const {cart, clearCarrito, deleteCarrito} = useContext(CartContext)

const [total, setTotal] = useState("0")
const [actualizar, setActualizar] = useState(false)
const [values, setValues] = useState({
  name: "",
  email: "",
});

  const createOrder = () =>{
    const db = getFirestore();
    const order = {
      buyer: {
        name: `${values.name}`,
        phone: `113015074`,
        email: `${values.email}`
      },
      items: cart, 
      total: total,
      date: moment().format(),
    }
    const query = collection(db, `orders`);
    addDoc(query, order)
    .then(({id}) => {
      toast (`Felicidades ${values.name}!
      El ID de tu compra es ${id}`, {
        icon: "👏🏻",
        style: {
        borderRadius: '10px',
        background: '#fff',
        color: '#000',
        fontsize: '12px',
        },
      })
    })
    .catch(()=> toast.error(`Your purchase could not be completed, please try again later.`))
  }

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

const buy = (event) => {
  // Previene el comportamiento default de loformularios el cual recarga el sitio
  event.preventDefault();
  if (!values.name || !values.email) {
    toast.error("complete los campos");
  }else {
    createOrder();
    eliminarTodo();
  }    
}

const handleChange = (event) =>{
  const { target } = event;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />

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

        <form className="form" onSubmit={buy}>
            <label htmlFor="password">Name</label>
              <input
                id="name"
                name="name"
                type="name"
                value={values.name}
                onChange={handleChange}
              />
              <br/>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
            />
            <br/>
              <button className="ItemCountButton" type="submit"> Create order</button>
        </form>
        
        </div>
        
</>
  )
}
export default Cart