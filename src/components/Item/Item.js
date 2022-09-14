import React from "react";
import "../ItemList/ItemList.css";
import { ItemCount } from "../ItemCount/ItemCount.js";

const Item = ({title, precio, img , stock}) => { 

    const carrito = (cantidad) => {
        alert(`Agregaste ${cantidad} productos al carrito`);
    }


    return (
        <>
        <div className="productos">
            <h2> {title} </h2>
            <img className="img-product" src={img}  alt={title}/>
            <h3> ${precio}USD</h3>
            <ItemCount initial={1} stock={stock} onAdd={carrito} />
        </div>
        </>
    )
}

export default Item;