import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuthStore } from "../auth/auth";

const Logout = () => {
  const { handleLogout } = useAuthStore();

  const handleAction = async () => {
    await handleLogout();
    console.log("cerrando sesion");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Cerrar Sesion</h2>
              <p className="text-center">
                Estas seguro de que quieres cerrar sesion?
              </p>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-danger mr-2"
                  onClick={handleAction}
                >
                  Cerrar Sesion
                </button>
                <Link to="/" className="btn btn-secondary">
                  Volver a la pagina principal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
