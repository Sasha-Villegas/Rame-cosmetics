import React from "react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.js";
// import { data } from "../mockData/mockData";
import { getFirestore, doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {
    
  const [producto, setPoducto] = useState({});
  const {id} = useParams();
  const db = getFirestore();

  useEffect(() => {
    getItem()
  }, [id])

  const getItem = () => {
    const queryDoc = doc(db, `item`,id);
      getDoc(queryDoc)
        .then((res) => {
        setPoducto({id: res.id, ...res.data()})
        })
    };

  return (
    <>
      {producto && <ItemDetail  producto={producto}/>}
    </>
  )
}

export default ItemDetailContainer

