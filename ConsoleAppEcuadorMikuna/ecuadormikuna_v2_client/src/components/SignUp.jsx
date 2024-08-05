import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
    address: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Verificar que todos los campos del formulario tengan valores
    for (let key in formData) {
      if (!formData[key]) {
        setErrorMessage(`El campo ${key} es requerido`);
        setIsLoading(false);
        return;
      }
    }

    try {
      formData.birthday = formData.birthday + "T00:00:00Z";
      console.log("Submitting form data:", formData);
      const response = await axios.post(
        "http://localhost:5255/api/client",
        formData
      );
      console.log("Response:", response.data); // Verificar la respuesta del servidor en la consola
      setSuccessMessage(response.data.message); // Mostrar el mensaje de �xito recibido desde el servidor
      setErrorMessage("");
      setFormData({
        name: "",
        email: "",
        password: "",
        birthday: "",
        address: "",
      });
      navigate("/login");
    } catch (error) {
      console.error("Error al registrar:", error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message); // Mostrar el mensaje de error del servidor
      } else {
        setErrorMessage("Error al registrar. Por favor, intenta nuevamente.");
      }
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
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
                <h2 className="card-title text-center">Registrate</h2>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nombre completo:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo Electronico:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contrasenia:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="birthday">Fecha de Nacimiento:</label>
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Direccion:</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mt-3 mb-0 text-center">
                    <button
                      type="submit"
                      className="btn btn-warning"
                      disabled={isLoading}
                    >
                      {isLoading ? "Registrando..." : "Registrar"}
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

export default SignUp;
