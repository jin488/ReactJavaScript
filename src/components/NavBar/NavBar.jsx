import CartWidget from "./CartWidget"
import "./NavBar.css"


// rafce ---> (atajo para crear la funcion de abajo)
const NavBar = () => {
  return (
    <nav className="navBar">
      <img src="https://cdn-xiaomi.waugi.com.ar/img/logo-1646831477.jpg" alt="xiaomi" className="logo" />
      
      <ul className="mainMenu"> 
        <li className="links">categorias</li>
        <li className="links">accesorios</li>
        <li className="links">soporte</li>
      </ul>

      <CartWidget/>
    </nav>
  )
}

export default NavBar