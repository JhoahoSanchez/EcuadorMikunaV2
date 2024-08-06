import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MainComponent from "./components/MainComponent";
import Chat from "./components/Chat";
import { styles } from "./components/Styles";
import ChatWidget from "./components/ChatWidget";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import "./App.css";
import RouterManager from "./router/router";
import ProductPage from "./pages/ProductPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Logout from "./components/Logout";

const App = () => {
  const isAuthenticated = true;
  const routerManager = new RouterManager();

  //agregar las rutas
  routerManager.addRoute("/", <HomePage />);
  routerManager.addRoute("/login", <Login />);
  routerManager.addRoute("/signup", <SignUp />);
  routerManager.addRoute("/forgot-password", <ForgotPassword />);
  routerManager.addRoute("/products", <ProductPage />);

  //routas protegidas
  routerManager.addProtectedRoute("/about", <About />, isAuthenticated); //solo como ejemplo
  routerManager.addProtectedRoute("/logout", <Logout />, isAuthenticated);

  return <Router>{routerManager.getRoutes()}</Router>;
};

export default App;
