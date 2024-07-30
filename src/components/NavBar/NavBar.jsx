import CartWidget from "./CartWidget"
import "./navbar.css"
import {Link} from "react-router-dom"; 


// rafce ---> (atajo para crear la funcion de abajo)
const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/"> 
      
      <img src="https://cdn-xiaomi.waugi.com.ar/img/logo-1646831477.jpg" alt="xiaomi" className="logo" />
      </Link>
      <ul className="mainMenu">
      <Link to="/category/smartphone"> 
        <p className="links">categorias</p>
      </Link>

      <Link to="/category/ipad"> 
      <p className="links">accesorios</p>
      </Link>
      </ul>
      
      <CartWidget/>
    </nav>
  )
}

export default NavBar