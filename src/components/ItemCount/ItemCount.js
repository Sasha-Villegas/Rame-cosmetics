import {useState, useEffect} from 'react';
import "./ItemCount.css"


const ItemCount = () => { 
    const stock = 5;

    const [items, setitems] = useState(1)

    // LESS ITEMS
    const onRemove = () => { items  > 0 ? setitems(items-1) : alert('No hay mas productos disponibles')
    }
    // PLUS ITEMS
    const onAdd = () => {
        items<stock ? setitems(items+1) : alert('Ya selecciono el maximo de productos')
    }
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
                   <button onClick={onAdd} className ='ItemCountButton'> + </button>
                </div>
                <p className='ItemCountP'>Stock disponible:{stock-items} </p>
            
            
                <div className='ItemCount-btn'>    
                  <button onClick={reset} className = 'ItemCountButton' > Reset</button>
                </div>
            </div>
    )
}   

export {ItemCount}