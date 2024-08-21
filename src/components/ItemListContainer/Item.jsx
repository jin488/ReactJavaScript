import { Link } from "react-router-dom";
import EjemploContador from "../ItemCount/ProductCount";

const Item = ({ producto }) => {
    return (
        <div className="item">
            <p className="titleProducts" >{producto.name}</p>
            <img src={producto.image} className="imageProducts" alt="" />
            <div className="orderBox">
                <div className="description-item">
                    <p>Price: ${producto.price}</p>
                    <p>Quantity: {producto.stock}</p>
                    <Link to={"/category/" + producto.category}>View more</Link>
                </div>
                <div>
                    <EjemploContador/>
                </div>
            </div>
        </div>
    );
};
export default Item;