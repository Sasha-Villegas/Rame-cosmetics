import React from "react";
import "../ItemList/ItemList.css";
import { Link } from "react-router-dom";


const Item = ({title, precio, img, id }) => { 
    return (
        <>
        <div className="productos">
            <h2> {title} </h2>
            <Link to={`/Item/${id}` }> 
            <img className="img-product" src={img}  alt={title}/>
            </Link>
            <h3> ${precio}USD</h3>

        </div>
        </>
    )
}

export default Item;