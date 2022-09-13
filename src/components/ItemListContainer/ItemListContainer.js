import "./itemlistc.css";
import {ItemCount} from "../ItemCount/ItemCount.js";
import {data} from "../mockData/mockData.js";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.js";

const ItemListContainer = ({greeting}) => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts.then((response) => {
           setProductList(response)
        }).catch((error) => console.log(error))
        }, [])

    
    
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(data);}, 2000)
    });

    
    return (
         <div className="tittle">
            {greeting}
          <ItemCount stock= {10} /> 
         <ItemList lista={productList} />
         </div>
    );
}

export default ItemListContainer;


