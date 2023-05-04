import React from "react";
import { Card, Button, CardGroup, Badge } from "react-bootstrap";
import { Cart3 } from "react-bootstrap-icons";
import { actionTypes } from "../reducer";
import {useStateValue} from '../StateProvider';

export default function Products({product}) {
  
  const [{basket}, dispatch] = useStateValue();
  const {id, name, price, img} = product; 

  const addToBasket = () => {
    
    const itemIndex = basket.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        const updatedBasket = [...basket];
        updatedBasket[itemIndex] = { ...updatedBasket[itemIndex], quantity: updatedBasket[itemIndex].quantity + 1 };
        dispatch({ 
          type: actionTypes.SET_BASKET, 
          basket: updatedBasket, 
        });
      } else {
        dispatch({
          type: actionTypes.ADD_TO_BASKET,
          item: {
            id,
            name,
            img,
            price,
            quantity: 1,
          },
        });
      }
  };

  const productCount = basket.filter(item => item.id === id).reduce((total, item) => total + item.quantity, 0);
  
  
  return (
    <CardGroup>  
            <Card className="bg-dark text-light w-100">
              <Card.Img variant="top" src={img} className="product-img" />
              <Card.Body className="products-info d-flex justify-content-between">
                <div>
                  <Card.Text>{name}</Card.Text>
                  <Card.Text>{price}</Card.Text>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-around">
                  {productCount > 0 && <h6><Badge pill bg="secondary">{productCount}</Badge></h6>}
                  <Button variant="danger" onClick={addToBasket}>
                    <Cart3 color="white" size={22}/>
                  </Button>
                </div>
              </Card.Body>
            </Card>
    </CardGroup>
  );
}
