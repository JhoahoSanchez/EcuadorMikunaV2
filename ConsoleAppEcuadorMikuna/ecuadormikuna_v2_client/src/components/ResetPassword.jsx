import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPassword = ({ token }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Las contrasenias no coinciden.');
            return;
        }

        setIsLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await axios.post('http://localhost:5150/api/account/resetpassword', { token, password });
            setSuccessMessage('Contraseña restablecida con éxito.');
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message || 'Error al restablecer la contraseña.');
            } else {
                setErrorMessage('Error al restablecer la contraseña.');
            }
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
                            <h2 className="card-title text-center">Restablecer Contrasenia</h2>
                            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                            {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
                            <form onSubmit={handleSubmit}>
                                <input type="hidden" name="token" value={token} />

                                <div className="form-group">
                                    <label htmlFor="password">Nueva Contrasenia:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={handleChangePassword}
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirmar Contrasenia:</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={handleChangeConfirmPassword}
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <div className="form-group mt-3 mb-0 text-center">
                                    <button type="submit" className="btn btn-warning" disabled={isLoading}>
                                        {isLoading ? 'Restableciendo...' : 'Restablecer'}
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

export default ResetPassword;
