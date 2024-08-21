import { useEffect } from "react";
import "./count.css"
import { TiShoppingCart } from "react-icons/ti";

const Titulo = ({ texto, numero, saludar }) => {

    useEffect(() => {

        //cleanup effect
        return () => {
            console.log("Desmontando titulo...")
        }
    }, [])

    return (
        <div className="boxBtnAdd">
            <p>{texto}</p>
            <p>{numero}</p>
            <button className="btnAdd" onClick={saludar}>
            <TiShoppingCart size={22} className='cart'/>
            </button>
        </div>
    );
};
export default Titulo;