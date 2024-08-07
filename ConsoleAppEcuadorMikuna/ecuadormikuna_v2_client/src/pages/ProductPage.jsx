import React, { useState } from "react";
import { ProductList } from "../components/ProductList";
import ProductDisplay from "../components/ProductDisplay";
import Navbar from "../components/Navbar";
import NavbarLoged from "../components/NavbarLoged";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

const ProductPage = ({ cart, setCart}) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  return (
    <div className="h-100">
      {sessionStorage.getItem("isAuthenticated") ? <NavbarLoged /> : <Navbar />}
      <Container>
        {/* Título y descripción */}
        <Row className="my-4">
          <Col>
            <h1>Nuestros Productos</h1>
            <p>
              Explora nuestra selección de productos cuidadosamente
              seleccionados para ti.
            </p>
          </Col>
        </Row>

        {/* Barra de búsqueda */}
        <Row className="mb-4">
          <Col>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          {/* Sección de filtrado */}
          <Col md={3}>
            <h4>Filtrar por:</h4>
            <Form.Group controlId="categoryFilter">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                as="select"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">Todas</option>
                <option value="coffee">Café</option>
                <option value="tea">Té</option>
                <option value="pastry">Pastelería</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="priceFilter" className="mt-3">
              <Form.Label>Rango de Precio</Form.Label>
              <Form.Control
                as="select"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value="">Todos</option>
                <option value="low">Bajo</option>
                <option value="medium">Medio</option>
                <option value="high">Alto</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Listado de productos */}
          <Col md={9}>
            <ProductList
              searchTerm={searchTerm}
              categoryFilter={categoryFilter}
              priceFilter={priceFilter}
              onProductsFetched={setProducts}
            />
            <ProductDisplay products={products} cart={cart} setCart={setCart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
