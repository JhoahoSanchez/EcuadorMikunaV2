import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Redirige a la página de inicio de sesión si no está autenticado
    return <Navigate to="/login" replace />;
  }

  // Renderiza el componente si el usuario está autenticado
  return children;
};

export default ProtectedRoute;