import React from "react";
import "./itemlistc.css";
import { data } from "../mockData/mockData"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {

    const [productList, setProductList] = useState([]);
    const {categoryName} = useParams();

   
    useEffect(() => {
      getProducts
      .then((response)=>{filter(response)})
    }, [categoryName])
  
    const filter = (response) => {
      if (categoryName) {
        setProductList(response.filter((item)=>item.category == categoryName))
        console.log(categoryName);
      }else {
        setProductList(data)
      }
    }
  
  const getProducts = new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(data)}, 1000)
    });
    
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


