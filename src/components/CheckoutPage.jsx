import { Container, Row, Col } from "react-bootstrap";
import {useStateValue} from '../StateProvider'
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";

export default function CheckoutPage() {

  const [{basket}, dispatch] = useStateValue();

  function ProductsGrid() {
    return (
      <Row>
        {basket?.map((item) => (
          <Col className="g-2 m-2" key={item.id} xs={12} sm={6} md={6} lg={4}>
            <CheckoutCard className="g-2" product={item} />
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <div className="checkout-page">
      <Container>
        <Row>
          <Col xs={12} className="text-center m-2">
            <h1>
              <strong>Shopping Cart</strong>
            </h1>
            <hr />
          </Col>
          <Col xs={6} sm={8} md={9}>
            <ProductsGrid />
          </Col>
          <Col className="checkout-total" xs={6} sm={4} md={3}>
            <Total />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
