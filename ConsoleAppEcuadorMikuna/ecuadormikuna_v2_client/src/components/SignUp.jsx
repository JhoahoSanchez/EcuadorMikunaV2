import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        passwordHash: '', // Debe coincidir con el nombre en el modelo User en el servidor
        email: '',
        firstName: '',
        lastName: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
            console.log('Submitting form data:', formData);
            const response = await axios.post('http://localhost:5150/api/account/register', formData);
            console.log('Response:', response.data); // Verificar la respuesta del servidor en la consola
            setSuccessMessage(response.data.message); // Mostrar el mensaje de éxito recibido desde el servidor
            setErrorMessage('');
            setFormData({
                username: '',
                passwordHash: '', // Asegúrate de limpiar correctamente el campo de la contraseña
                email: '',
                firstName: '',
                lastName: ''
            });
        } catch (error) {
            console.error('Error al registrar:', error);
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message); // Mostrar el mensaje de error del servidor
            } else {
                setErrorMessage('Error al registrar. Por favor, intenta nuevamente.');
            }
            setSuccessMessage('');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">SignUp</h2>
                            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                            {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Nombre de usuario:</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={formData.username}
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
                                        name="passwordHash" // Asegúrate de que coincida con el nombre en el modelo User
                                        value={formData.passwordHash}
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
                                    <label htmlFor="firstName">Nombre:</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Apellido:</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group mt-3 mb-0 text-center">
                                    <button type="submit" className="btn btn-warning" disabled={isLoading}>
                                        {isLoading ? 'Registrando...' : 'SignUp'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
