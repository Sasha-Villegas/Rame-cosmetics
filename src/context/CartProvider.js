import React from 'react';
import { useState } from "react"
import { CartContext } from "./CartContext.js"
import toast, { Toaster } from 'react-hot-toast';



const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const notify = () => toast('Good Job!',
    {
    style: {
    borderRadius: '10px',
    background: '#fff',
    color: '#000',
    },
    });

    const addCarrito = (item, cantidad, stock) => {
    const existe = cart.find ((elemento) => elemento.id === item.id);
    if (existe) {
        if (existe.stock < cantidad){
            toast (`We only have left in stock ${existe.stock}`, {
            icon : " ⚠️ ",
            style : {
                borderRadius: '10px',
                background: '#fff',
                color: '#000',
                fontsize: '12px',
                },
        });

        }else {
            existe.cantidad = existe.cantidad + cantidad;
            existe.stock = existe.stock - cantidad;
            setCart([...cart]);}
    }else{
        setCart([...cart, {...item, cantidad, stock}]);
        toast (`We add ${cantidad}, ${item.title} to cart`, {
            icon: "✅ ",
            style: {
            borderRadius: '10px',
            background: '#fff',
            color: '#000',
            fontsize: '12px',
            },
        })
    }
}

const deleteCarrito = (prodId) => {
    setCart(cart.filter((prod)=> prod.id !== prodId))
}

const clearCarrito = () => {
    setCart([]);
}


  return (
    <CartContext.Provider value={{cart, addCarrito, clearCarrito, deleteCarrito}}>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
