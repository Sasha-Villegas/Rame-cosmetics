import React from "react";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import "./ItemCount.css"


const ItemCount = ( {stock, agregar} ) => { 

    const [cantidad, setCantidad] = useState(0) 


    // LESS ITEMS
    const onRemove = () => { cantidad  > 0 ? setCantidad(cantidad -1) : toast.error('Can´t subtract any more!')
    };

    // PLUS ITEMS
    const onPlus = () => {
        cantidad < stock ? setCantidad(cantidad+1) : toast.success('I have already selected the maximum number of products');
    };

    //AGREGAR ITEMS 
    const confirm = () => {
        if (cantidad === 0) {
        return
    } else {
        agregar(cantidad)

    }
    };


    return (
        <>
        <Toaster position="top-right" reverseOrder={false}/>
            <div className = 'ItemCount'>
            
                <p className = 'ItemCountP'> Amount : {cantidad} </p>
                <div className = 'ItemCount-btn'>
                   <button onClick={onRemove} className = 'ItemCountButton'> - </button> 
                   <button onClick={onPlus} className ='ItemCountButton'> + </button>
                </div>
                <p className='ItemCountP'>Available Stock:{stock-cantidad} </p>
                <div className='ItemCount-btn'>
                    <button onClick={confirm} className = 'ItemCountButton'>Add to cart</button>
                </div>
            </div>
        </>
    )
}   

export { ItemCount } ;
