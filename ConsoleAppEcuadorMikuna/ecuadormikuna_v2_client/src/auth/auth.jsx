import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthStore = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (data) => {
    //user
    setIsAuthenticated(true);
    setUser(data);
    sessionStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("user", JSON.stringify(data));
    //cart
    sessionStorage.setItem("cart", JSON.stringify({
      userId: data.id,
      items: [],
    }));
    //console.log(data);
    navigate("/"); // Redirige después de iniciar sesión
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("cart");
    navigate("/"); // Redirige a la página de login después de cerrar sesión
  };

  return {
    handleLogin,
    isAuthenticated,
    handleLogout,
    user,
  };
};
