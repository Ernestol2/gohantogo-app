import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import products from "../products";

export default function FreeComponent() {
  return (
    <CardGroup> 
      <Row xs={2} sm={2} md={3} className="bg-dark g-0">
        {products.map(({ id, name, price, img }) => (
          <Col key={id}>
            <Card className="bg-dark text-light w-100">
              <Card.Img variant="top" src={img} className="product-img" />
              <Card.Body className="info d-flex justify-content-between">
                <div>
                <Card.Text>{name}</Card.Text>
                <Card.Text>{price}</Card.Text>
                </div>
                <div>
                <Button variant="danger">+</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </CardGroup>
  );
}
