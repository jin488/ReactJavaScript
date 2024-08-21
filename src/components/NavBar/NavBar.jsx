import CartWidget from "./CartWidget"
import "./navbar.css"
import { Link } from "react-router-dom";
import { FaComputer } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";


// rafce ---> (atajo para crear la funcion de abajo)
const NavBar = () => {
  return (
    <nav className="navBar">
      <Link className="logoMain" to="/">
        <img src="/img/computex.png" alt="ComputeX" className="logo" />
      </Link>

      <ul className="mainMenu">
        <Link className="links boxLinks" to="/category/televisors">
          <FaTv className="iconMenu" />
          <p className="links">TVs</p>
        </Link>

        <Link className="links boxLinks" to="/category/notebooks">
          <FaComputer className="iconMenu" />
          <p className="links">Computers</p>
        </Link>

        <Link className="links boxLinks" to="/category/components">
        <FaHeadphonesAlt className="iconMenu" />
          <p className="links">Accesories</p>
        </Link>

        <Link className="links boxLinks" to="/">
          <MdSupportAgent className="iconMenu" />
          <p className="links">Support</p>
        </Link>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar