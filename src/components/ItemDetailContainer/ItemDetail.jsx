import "./ItemDetail.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext"
import Count from "../ItemCount/ProductCount"
import { Link } from "react-router-dom";


const ItemDetail = ({ producto }) => {
    const { agregarProducto } = useContext(CartContext)
    const [viewItemCount, setViewItemCount] = useState(true);

    const agregarAlCarrito = (contador) => {
        const productoCarrito = { ...producto, cantidad: contador };

        agregarProducto(productoCarrito)

        setViewItemCount(false)

    };


    return (
        <div className="centerItemDetail">
            <div className="itemDetail">
                <div className="order">
                    <div className="image">
                        <img src={producto.image} alt={producto.name} />
                    </div>
                    <div className="detail">
                        <h2>{producto.name}</h2>
                        <p>${producto.price}</p>
                        {
                            viewItemCount ? (<Count agregarAlCarrito={agregarAlCarrito} stock={producto.stock} />)
                                :
                                (<Link className="goCart" to="/cart" >Go Cart →</Link>)
                        }

                    </div>
                    <div className="image">
                        <img src={producto.secondImage} alt={producto.name} />
                    </div>
                </div>
                <p className="description">{producto.description}</p>
            </div>
        </div>
    );
};
export default ItemDetail;