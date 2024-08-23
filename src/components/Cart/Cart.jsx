import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
    const { carrito, totalPrice, deleteProducts, emptyCart } = useContext(CartContext)


    if (carrito.length === 0) {
        return (
            <div>
                <Link className="backBtn" to="/"> ← back</Link>
                <h2 className="theCartIsEmpty">The cart is empty</h2>
            </div>
        )
    }


    return (
        <div className="cartBox">
            <ul >
                {carrito.map((productCart) => (
                    <li>
                        <img width={150} src={productCart.image} alt={productCart.name} />
                        <p className="name">{productCart.name}</p>
                        <p>Quantity: {productCart.cantidad}</p>
                        <p>Price c/u: $ {productCart.price}</p>
                        <p>Partial price: ${productCart.cantidad * productCart.price}</p>
                        <button className="delete" onClick={() => deleteProducts(productCart.id)} ><FaRegTrashAlt /></button>

                    </li>
                ))}
            </ul>
            <div>
                <h2>Total price: $ {totalPrice()}</h2>
                <button className="emptyDelete" onClick={emptyCart}>All <FaRegTrashAlt /></button>
            </div>
        </div>
    )
}

export default Cart