import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <img 
          src="src/assets/Banner01.jpg" 
          alt="Cafe" 
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Bienvenido a ECUADOR MIKUNA</h1>
          <p>Sabor, Tradición y Calidad en Cada Taza</p>
          <button className="cta-button">Explorar Menú</button>
        </div>
      </div>
      <div className="about-section">
        <h2>Nuestra Historia</h2>
        <p>
          En ECUADOR MIKUNA, valoramos la calidad y la tradición. Cada taza de café es una muestra de nuestra dedicación a ofrecerte lo mejor.
        </p>
      </div>
      <div className="menu-section">
        <h2>Nuestro Menú</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="path_to_item_image.jpg" alt="Cafe Item" />
            <p>Café Especial</p>
          </div>
          <div className="menu-item">
            <img src="path_to_item_image.jpg" alt="Cafe Item" />
            <p>Pastelería Fina</p>
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
  );
};

export default Home;

