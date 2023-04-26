import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { Trash } from "react-bootstrap-icons";
import { useStateValue } from "../StateProvider";
import {actionTypes} from "../reducer"

export default function CheckoutCard({
  product: {id, img, name, price},
}) {
  
  const [{basket}, dispatch] = useStateValue();

  const removeItem = () => dispatch ({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })

  return (
    <>
        <section className="checkout-card">
            <div className="checkout-card-left">
              <img src={img} alt={name} className="checkout-img"/>
              <div>
              <Button variant="secondary">+</Button>
              <Button variant="secondary">1</Button>
              <Button variant="secondary">-</Button>
              </div>
            </div>
            <div>
              <h5>{name}</h5>
              <Card.Text>${price}</Card.Text>
            </div>
            <div className="checkout-buttons">
              <Button variant="dark" onClick={removeItem}>
                <Trash color="white" size={26}/>
              </Button>
            </div>
        </section>
    </>
  );
}



{/*
  <Card className="cheackout-card bg-light w-80">
              <Card.Img variant="top" src={img} className="product-img" />
              <Card.Body className="products-info d-flex justify-content-between">
                <div>
                <Card.Text>{name}</Card.Text>
                <Card.Text>{price}</Card.Text>
                </div>
                <div className="d-flex align-items-end">
                <Button variant="outline-dark" onClick={removeItem}>
                  <Trash color="dark" size={22}/>
                </Button>
                </div>
              </Card.Body>
            </Card>
*/}