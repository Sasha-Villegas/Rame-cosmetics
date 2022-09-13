import { useState } from 'react';
import "./ItemCount.css"


const ItemCount = (stock, initial, onAdd) => { 

    

    const [items, setitems] = useState(initial)

    // LESS ITEMS
    const onRemove = () => { items  > 0 ? setitems(items-1) : alert('No hay mas productos disponibles');
    };

    // PLUS ITEMS
    const onPlus = () => {
        items < stock ? setitems(items+1) : alert('Ya selecciono el maximo de productos');
    };

    //AGREGAR ITEMS 
    const handleOnAdd = () => {
        if (items <= stock) onAdd(items);
    };

    // RESET ITEMS
    const reset = () => {  
        setitems(0)
    }

    return (

            <div className = 'ItemCount'>
                <h1 className = 'ItemCount-title'>Item Count</h1>
                <p className = 'ItemCountP'>{items} </p>
                <div className = 'ItemCount-btn'>
                   <button onClick={onRemove} className = 'ItemCountButton'> - </button> 
                   <button onClick={onPlus} className ='ItemCountButton'> + </button>
                </div>
                <p className='ItemCountP'>Stock disponible:{stock-items} </p>
                <div className='ItemCount-btn'>

                    <button onClick={handleOnAdd} className = 'ItemCountButton'>Agregar al carrito</button>
                </div>
            
            
                <div className='ItemCount-btn'>    
                  <button onClick={reset} className = 'ItemCountButton' > Reset</button>
                </div>
            </div>
    )
}   

export { ItemCount } ;
