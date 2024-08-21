import "./itemDetail.css";
import ProductCount from "../ItemCount/ProductCount"
import { useContext } from "react";
import { CartContext } from "../../context/cartContext"

const ItemDetail = ({ producto }) => {
    const { agregarProducto } = useContext(CartContext)

    const agregarAlCarrito = (contador) => {
        const productoCarrito = { ...producto, cantidad: contador};

        agregarProducto(productoCarrito)
    };         

    return (
        <div className="item-detail">
            <div className="image">
                <img src={producto.imagen} alt="" />
            </div>
            <div className="detail">
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>Price: ${producto.precio}</p>
                <ProductCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>           
                </div>
        </div>
    );
};
export default ItemDetail;