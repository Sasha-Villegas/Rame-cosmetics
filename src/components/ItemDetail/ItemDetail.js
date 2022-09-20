import React from 'react';
import "./ItemDetail.css"
import { ItemCount } from "../ItemCount/ItemCount.js";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({item, stock,}) => {

  const [count, setCount] = useState([]);
  const [render, setRender] = useState([]);

  useEffect(() => {
    console.log(`${count} products were sent to cart`);
  }, [count])

  const agregar =  (cantidad) => {  
    setCount(cantidad);
     setRender(true);
  }

  
  return(
    <>
    <div className="product-duplicado">
          <h2>{item.title}</h2>
          <img  src={item.img} alt={item.name} />
          <h3>${item.precio}</h3>
          {!render && <ItemCount stock={stock} agregar={agregar} />}
          {render && <div className="btn-group">
            <Link to={`/cart`}><button className='btn'>Checkout</button></Link>
            <Link to={`/`}><button className='btn'>Keep buying</button></Link>
          </div>}


    </div>
    </>
  )
}

export default ItemDetail