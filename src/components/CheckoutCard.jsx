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
    <CardGroup>  
            <Card className="bg-dark text-light w-100">
              <Card.Img variant="top" src={img} className="product-img" />
              <Card.Body className="products-info d-flex justify-content-between">
                <div>
                <Card.Text>{name}</Card.Text>
                <Card.Text>{price}</Card.Text>
                </div>
                <div className="d-flex align-items-end">
                <Button variant="secondary" onClick={removeItem}>
                  <Trash color="white" size={26}/>
                </Button>
                </div>
              </Card.Body>
            </Card>
    </CardGroup>
  );
}

