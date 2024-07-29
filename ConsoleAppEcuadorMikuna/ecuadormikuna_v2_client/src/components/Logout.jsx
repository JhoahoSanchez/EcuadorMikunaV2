import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logout = () => {
    const history = useHistory();

    const handleLogout = async () => {
        try {
            // Realizar la solicitud POST para cerrar sesión
            await axios.post('http://localhost:5150/api/account/logout');

            // Limpiar cualquier información de sesión del lado del cliente si es necesario
            // Por ejemplo, limpiar localStorage o sessionStorage
            localStorage.clear(); // Ejemplo de limpieza del localStorage

            // Mostrar un mensaje de éxito al usuario
            console.log('Logout exitoso');

            // Redireccionar al usuario a la página de inicio de sesión o la página principal
            history.push('/login');
        } catch (error) {
            console.error('Error al intentar cerrar sesión:', error);
            // Manejar el error adecuadamente, por ejemplo, mostrando un mensaje al usuario
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Cerrar Sesión</h2>
                            <p className="text-center">¿Estás seguro de que quieres cerrar sesión?</p>
                            <div className="text-center">
                                <button type="button" className="btn btn-danger mr-2" onClick={handleLogout}>
                                    Cerrar Sesión
                                </button>
                                <Link to="/" className="btn btn-secondary">
                                    Volver a la página principal
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logout;
