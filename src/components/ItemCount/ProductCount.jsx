import { useState } from "react";
import Contador from "./Count";
import Titulo from "./Title";

const EjemploContador = ({ stock }) => {
    const [contador, setContador] = useState(1);
    const [toggle, setToggle] = useState(true);



    const aumentarContador = () => {
        //contador = contador + 1
        if (contador < stock.stock) {
            setContador(contador + 1);
        }
    };

    const disminuirContador = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    const cambiarValorToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <Contador
                contador={contador}
                aumentarContador={aumentarContador}
                disminuirContador={disminuirContador}
            />

            {
                toggle && <Titulo/>
            }
        </div>
    );
};
export default EjemploContador;