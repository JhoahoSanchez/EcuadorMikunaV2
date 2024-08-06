import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../styles/ProductDisplay.css";
import { useNavigate } from "react-router-dom";

const ProductDisplay = ({ products }) => {
  const porductImage = [
    "src/assets/bolon.png",
    "src/assets/capuccino.png",
    "src/assets/mocaccino.png",
    "src/assets/tigrillo.png",
  ];
  const navigate = useNavigate();

  const handleClick = (id) => {
    let isAuthenticated = sessionStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      let user = sessionStorage.getItem("user");
      //TODO: agregar al carrito del usuario
      console.log("Ha entrado a agregar " + products[id - 1].name);
    }
  };

  return (
    <div id="card-box">
      <Row>
        {products && products.length > 0 ? (
          products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
              <Card className="product-card">
                <Card.Img
                  variant="top"
                  src={porductImage[product.id - 1]}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>
                    <strong>Precio: </strong>${product.price}
                  </Card.Text>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => handleClick(product.id)}
                  >
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </Row>
    </div>
  );
};

export default ProductDisplay;
