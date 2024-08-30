import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./navbar.css"


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)


    let quantity = totalQuantity()


    return (
        <Link to={"/cart"} className="cartNumber">
            <TiShoppingCart size={40} className='cart' style={ quantity === 0 && { color: "rgb(110, 4, 110)"}} />
            <p>{quantity > 0 && quantity}</p>
        </Link>
    )
}

export default CartWidget
