import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthStore } from "../auth/auth";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { handleLogin } = useAuthStore(); // Usa el hook personalizado

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5255/api/client/getByEmail/${encodeURIComponent(
          email
        )}`
      ); //cambiar a funcion que autorice el login y devuelva el usuario
      if (response.status === 200) {
        handleLogin(response.data); // Maneja el inicio de sesión usando el hook
      }
    } catch (err) {
      setError("Nombre de usuario o contraseña incorrectos.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Inicia Sesion</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                      type="text"
                      id="username"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-3 mb-0 text-center">
                    <button type="submit" className="btn btn-warning">
                      Login
                    </button>
                    <div className="text-center mt-3">
                      <Link to="/signup" className="btn btn-link">
                        Registrarse
                      </Link>
                      <Link to="/forgot-password" className="btn btn-link">
                        Olvidaste tu contraseña
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
