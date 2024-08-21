import "./itemDetail.css";

const ItemDetail = ({ producto }) => {
    return (
        <div className="item-detail">
            <div className="image">
                <img src={producto.imagen} alt="" />
            </div>
            <div className="detail">
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>Price: ${producto.precio}</p>
            </div>
        </div>
    );
};
export default ItemDetail;