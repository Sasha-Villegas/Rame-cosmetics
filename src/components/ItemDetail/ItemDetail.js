import "./ItemDetail.css"


const ItemDetail = ({item}) => {
  
  return(
    <>
    <div className="product-duplicado">
          <p>PRODUCTO DESTACADO</p>
          <h2>{item.tittle}</h2>
          <img  src={item.img} alt={item.name} />
          <h3>${item.precio}</h3>
          
    </div>
    </>
  )
}

export default ItemDetail