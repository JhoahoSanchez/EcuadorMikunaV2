import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductDisplay = ({ products }) => {
  return (
    <div>
      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={product.imageUrl}
                alt={product.name}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Precio: </strong>${product.price}
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ProductDisplay;
