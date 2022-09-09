import "../ItemList/ItemList.css";

const Item = ({tittle, precio, img}) => { 
    return (
        <div className="productos">
            <h2>{tittle} </h2>
            <img src={img} className="img-product" alt="{tittle}"/>
            <h3> ${precio}USD</h3>
        </div>
    )
}

export default Item;