// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-div">
        <div>
          <Link to="/" className="navbar-logo">
            Ecuador Mikuna
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/login">Ingresa</Link>
          </li>
          <li>
            <Link to="/signup">Registrate</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
