import React from "react";
import { Card, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useStateValue } from "../StateProvider";
import {actionTypes} from "../reducer"

export default function CheckoutCard({ product }) {

  const { id, img, name, price } = product;
  const [{basket}, dispatch] = useStateValue();

  const removeItem = () => dispatch ({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })


  const incrementProdcut = () => {
    const itemIndex = basket.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        const updatedBasket = [...basket];
        updatedBasket[itemIndex] = { ...updatedBasket[itemIndex], quantity: updatedBasket[itemIndex].quantity + 1 };
        dispatch({ 
          type: actionTypes.SET_BASKET, 
          basket: updatedBasket, 
        });
      }
  }

  const decrementProduct = () => {
    const itemIndex = basket.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        const updatedBasket = [...basket];
        updatedBasket[itemIndex] = { ...updatedBasket[itemIndex], quantity: updatedBasket[itemIndex].quantity - 1 };
        dispatch({ 
          type: actionTypes.SET_BASKET, 
          basket: updatedBasket, 
        });
      }
  }

  return (
    <>
        <section className="checkout-card">
            <div className="checkout-card-left">
              <img src={img} alt={name} className="checkout-img"/>
              <div>
                <Button 
                  onClick={incrementProdcut} 
                  variant="secondary">+</Button>
                <Button variant="secondary">{product.quantity}</Button>
                <Button 
                  onClick={decrementProduct}
                  disabled={product.quantity === 1} 
                  variant="secondary">-</Button>
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


