import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../styles/ProductDisplay.css";
import { useNavigate } from "react-router-dom";

const ProductDisplay = ({ products, cart, setCart }) => {
  const porductImage = [
    "src/assets/capuccino.png",
    "src/assets/tigrillo.png",
    "src/assets/mocaccino.png",
    "src/assets/bolon.png",
  ];
  const navigate = useNavigate();

  const addProductToCart = (product) => {
    const updatedCart = {
      ...cart,
      items: [...cart.items, { ...product, quantity: 1 }],
    };
    setCart(updatedCart);
  };

  const handleClick = (product) => {
    let isAuthenticated = sessionStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      //TODO: agregar al carrito del usuario
      addProductToCart(product);
      //navigate("/cart");
      console.log("Ha entrado a agregar " + product.name);
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
                    onClick={() => handleClick(product)}
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
