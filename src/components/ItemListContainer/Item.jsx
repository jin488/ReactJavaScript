import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <Link to={"/detalle/" + producto.id} className="item">
            <p className="titleProducts" >{producto.name}</p>
            <img src={producto.image} className="imageProducts" alt="" />
            <div className="orderBox">
                <div className="description-item">
                    <p>Price: ${producto.price}</p>
                    <p>Quantity: {producto.stock}</p>
                    <Link className="category" to={"/category/" + producto.category}>Category: {producto.category}</Link>
                </div>
            </div>
        </Link>
    );
};
export default Item;