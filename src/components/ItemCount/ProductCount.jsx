import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import "./Count.css"

const Count = ({ agregarAlCarrito, stock }) => {
    const [contador, setContador] = useState(1);

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const disminuirContador = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div className="boxCount">
            <button className="btnCount" onClick={aumentarContador} >+</button>
            <span className="numberCount"> {contador} </span>
            <button className="btnCount" onClick={disminuirContador}>-</button>

            <button className="btnAdd" onClick={() => agregarAlCarrito(contador)}>
            <TiShoppingCart size={22} className='cart'/>
            </button>
        </div> 
    );
};
export default Count;
