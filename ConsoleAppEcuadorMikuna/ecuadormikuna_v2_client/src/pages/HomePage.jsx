import React from "react";
import Navbar from "../components/Navbar";
import NavbarLoged from "../components/NavbarLoged";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/products");
  };

  return (
    <div>
      {sessionStorage.getItem("isAuthenticated") ? <NavbarLoged /> : <Navbar />}
      <div className="home">
        <div className="hero-section">
          <img
            src="src/assets/Banner01.jpg"
            alt="Cafe"
            className="hero-image"
          />
          <div className="hero-text">
            <div>
              <h1>Bienvenido a Ecuador Mikuna</h1>
              <p>Welcome Warmicunas Panicunas</p>
            </div>
            <button className="cta-button" onClick={handleButtonClick}>
              Explorar Menú
            </button>
          </div>
        </div>
        <div className="about-section">
          <div>
            <p>
              Bienvenidos a Ecuador Mikuna, una encantadora cafetería
              ecuatoriana que celebra la riqueza de nuestra cultura y
              gastronomía. Ubicada en el corazón de la ciudad, ofrecemos una
              experiencia única donde los aromas y sabores autóctonos se
              combinan con un ambiente acogedor y auténtico.
            </p>
          </div>
          <div>
            <p>
              En Ecuador Mikuna, cada taza de café es un viaje a las fértiles
              tierras de los Andes y la Amazonía, donde se cultivan nuestros
              granos de alta calidad. Además de nuestras exquisitas bebidas,
              deleítese con una selección de platos tradicionales preparados con
              ingredientes frescos y locales, honrando nuestras raíces
              culinarias.
            </p>
          </div>
          <div>
            <p>
              Ya sea para un desayuno revitalizante, un almuerzo reconfortante o
              una merienda relajante, Ecuador Mikuna es el lugar perfecto para
              disfrutar de momentos inolvidables. ¡Ven y descubre el verdadero
              sabor de Ecuador con nosotros!
            </p>
          </div>
          <h2>Nuestra Historia</h2>
          <p>
            En ECUADOR MIKUNA, valoramos la calidad y la tradición. Cada taza de
            café es una muestra de nuestra dedicación a ofrecerte lo mejor.
          </p>
        </div>
        <div className="menu-section">
          <h2>Nuestro Menú</h2>
          <div className="menu-items">
            <div className="menu-item">
              <img src="src/assets/capuccino.png" alt="Cafe Item" />
              <p>Café Especial</p>
            </div>
            <div className="menu-item">
              <img src="src/assets/tigrillo.png" alt="Cafe Item" />
              <p>Desayunos ecuatorianos</p>
            </div>
            {/* Añade más items del menú según sea necesario */}
          </div>
        </div>
        <div className="contact-section">
          <h2>Contacto</h2>
          <p>Dirección: Calle Falsa 123, Quito, Ecuador</p>
          <p>Teléfono: (02) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
