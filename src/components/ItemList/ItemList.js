import Item from "../Item/Item.js";
import "./ItemList.css";

const ItemList = ({lista}) => {
    return (
        <>
        <div className="ItemList">
            {
                lista.map((product) => (
                    <Item key={product.id} tittle={product.tittle} precio={product.precio} img={product.img}  stock={product.stock} />
                ))
            }
        </div>
        </>
    )
};

export default ItemList ;