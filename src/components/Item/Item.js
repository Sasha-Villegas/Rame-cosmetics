import "../ItemList/ItemList.css";
import { ItemCount } from "../ItemCount/ItemCount";

const Item = ({tittle, precio, img , stock}) => { 

    const handleOnAdd = (cantidad) => {
        alert(`Agregaste ${cantidad} productos al carrito`);
    }


    return (
        <>
        <div className="productos">
            <h2>{tittle} </h2>
            <img className="img-product" src={img}  alt={tittle}/>
            <h3> ${precio}USD</h3>
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        </div>
        </>
    )
}

export default Item;