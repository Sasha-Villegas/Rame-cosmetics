import React from "react";
import "../ItemList/ItemList.css";


const Item = ({title, precio, img }) => { 
    return (
        <>
        <div className="productos">
            <h2> {title} </h2>
            <img className="img-product" src={img}  alt={title}/>
            <h3> ${precio}USD</h3>

        </div>
        </>
    )
}

export default Item;