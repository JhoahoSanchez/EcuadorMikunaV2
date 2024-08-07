import React from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';

const CartDisplay = ({cart, removeProductFromCart}) => {


    const porductImage = [
        "src/assets/capuccino.png",
        "src/assets/tigrillo.png",
        "src/assets/mocaccino.png",
        "src/assets/bolon.png",
      ];

    const handleRemove = async (productId) =>{
        await removeProductFromCart(productId);
        console.log("Product " + productId + " removed from cart.");
    }

    return (
        <div className="container mt-5">
        <h2 className="mb-4">Tu Carrito de Compras</h2>
        <Row>
          {cart.items.length > 0 ? (
            cart.items.map((item, index) => (
              <Col key={index} xs={12} className="mb-3">
                <Card className="h-100">
                  <Row className="g-0">
                    <Col md={4}>
                      <Card.Img variant="left" src={porductImage[item.id]} alt={item.name} />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          <strong>Precio:</strong> ${item.price}
                        </Card.Text>
                        <Card.Text>
                          <strong>Cantidad:</strong> {item.quantity}
                        </Card.Text>
                        <Button 
                          variant="danger" 
                          onClick={() => handleRemove(item.productId)}>
                          Eliminar del carrito
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))
          ) : (
            <p>No hay productos en tu carrito.</p>
          )}
        </Row>
      </div>
    );
}


export default CartDisplay;