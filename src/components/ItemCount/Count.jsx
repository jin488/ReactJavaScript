import "./count.css"

const Contador = ({ contador, aumentarContador, disminuirContador }) => {
    return (
        <div className="boxCount">
            <button className="btnCount" onClick={aumentarContador} >+</button>
            <p className="numberCount"> {contador} </p>
            <button className="btnCount" onClick={disminuirContador}>-</button>
        </div>
    )
}
export default Contador