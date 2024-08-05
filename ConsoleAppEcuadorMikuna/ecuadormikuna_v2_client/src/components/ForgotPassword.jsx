import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckEmail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5255/api/client/checkemail?email=${email}`
      ); //cambiar en la API
      if (response.status === 200) {
        setMessage("El correo electronico esta registrado.");
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setMessage("Alerta: El correo electronico no esta registrado.");
      } else {
        setMessage(
          "Alerta: Ocurrio un error al verificar el correo electronico. Por favor, intente nuevamente mas tarde."
        );
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5150/api/account/forgotpassword",
        { email }
      );
      if (response.status === 200) {
        setMessage(
          "El enlace de restablecimiento de contrasenia ha sido enviado a su correo electronico."
        );
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setMessage("Alerta: El correo electronico no esta registrado.");
      } else {
        setMessage(
          "Alerta: Ocurrio un error al procesar su solicitud. Por favor, intente nuevamente mas tarde."
        );
      }
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
                <h2 className="card-title text-center">
                  Olvidaste tu Contrasenia?
                </h2>
                {message && (
                  <div
                    className={`alert ${
                      message.includes("Alerta")
                        ? "alert-danger"
                        : "alert-success"
                    }`}
                    role="alert"
                  >
                    {message}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Correo Electronico:</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group mt-3 mb-0 text-center">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCheckEmail}
                    >
                      Verificar Correo Electronico
                    </button>
                    <button type="submit" className="btn btn-warning ml-2 m-2">
                      Enviar Enlace de Restablecimiento
                    </button>
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

export default ForgotPassword;
