// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="navbar">
          <div><Link to="/" className="navbar-logo">Ecuador Mikuna</Link></div>
          <ul className="navbar-links">
              <li><Link to="/about">Productos</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;