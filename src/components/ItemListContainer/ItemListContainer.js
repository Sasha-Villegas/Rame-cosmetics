import React from "react";
import "./itemlistc.css";
// import { data } from "../mockData/mockData"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList.js"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {

    const [productList, setProductList] = useState([]);
    const {categoryName} = useParams();

    useEffect(() => {
      getProducts()
    }, [categoryName])

  
    const getProducts = () =>{
      const db = getFirestore();
      const querySnapshot = collection(db, `item`);
      if (categoryName) {
        const queryFilter = query(querySnapshot, where("category", "==", categoryName))
        getDocs(queryFilter)
          .then((response)=> {
          const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
        setProductList(data)
      }).catch((err)=> console.log(err))
      }else {
        getDocs(querySnapshot)
          .then((response)=> {
          const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
        setProductList(data)
      }).catch((err)=> console.log(err))
      }
    
    }
    return (
        <>
         <div className="tittle">
            {greeting}
         <ItemList lista={productList} />
         </div>
        </>
    );
}

export default ItemListContainer;
