import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavbarLoged = () => {
  return (
    <nav className="navbar">
      <div className="navbar-div">
        <div>
          <Link to="/" className="navbar-logo">
            <img src="src/assets/logo-wbg.png" alt="Ecuador Mikuna Logo" />
            Ecuador Mikuna
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/cart">Carrito</Link>
          </li>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
          <li>
            <Link to="/logout">Cerrar Sesion</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLoged;
