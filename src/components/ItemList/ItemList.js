import Item from "../Item/Item.js";
import "./ItemList.css";

const ItemList = ({lista}) => {
    return (
        <div className="ItemList">
            {
                lista.map((product) => (
                    <Item  tittle={product.tittle} precio={product.precio} img={product.img} />
                ))
            }
        </div>
    )
}

export default ItemList