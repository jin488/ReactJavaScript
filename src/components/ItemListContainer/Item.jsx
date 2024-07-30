import { Link } from "react-router-dom";


const Item = ({ producto }) => {
    return (
        <div className="item">
            <img src={producto.image} width={200} alt="" />
            <div className="description-item">
                <p>{producto.nombre}</p>
                <p>precio: ${producto.price}</p>

                <Link to={"/category/" + producto.category}>View more</Link>
            </div>
        </div>
    );
};
export default Item;