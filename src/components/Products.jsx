import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { Cart3 } from "react-bootstrap-icons";
import { actionTypes } from "../reducer";
import {useStateValue} from '../StateProvider';

export default function Products({product}) {
  
  const [{basket}, dispatch] = useStateValue();
  const {id, name, price, img} = product; 
  
  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        img,
        price
      }
    })
  }
  
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
                <Button variant="danger" onClick={addToBasket}>
                  <Cart3 color="white" size={22}/>
                </Button>
                </div>
              </Card.Body>
            </Card>
    </CardGroup>
  );
}
