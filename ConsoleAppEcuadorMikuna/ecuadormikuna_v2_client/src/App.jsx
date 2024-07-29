import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*<Route path="/about" component={AboutPage} />*/}
        {/* Añadir más rutas según sea necesario */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
