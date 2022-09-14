import React from "react";
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { data } from "../mockData/mockData";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    
  const [producto, setPoducto] = useState([]);
  const {id} = useParams();


  useEffect(() => {
    getItem.then((response)=> {setPoducto(response.find(prod => prod.id === id))
  }).catch((error)=>console.log(error))
  }, [])

const getItem = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve(data);}, 1000)
  });

  return (
    <>
      {producto && <ItemDetail  id={producto.id}  title={producto.title} category={producto.category} precio={producto.precio} img={producto.img} />}
    </>
  )
}

export default ItemDetailContainer

