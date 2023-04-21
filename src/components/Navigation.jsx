import { Container, Nav, Navbar, Badge, Button } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import {Link} from 'react-router-dom';
import logo from "../images/logo.jpg";
import {useStateValue} from '../StateProvider'

export default function Navigation() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <Navbar sticky="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="logo-container"> 
          <img 
            src={logo} 
            alt="logo" 
            className="logo" />
        </Link>
        <div className="m-2">
        <Link to="/checkout-page">
          <Cart color="white" size={30}/>
        </Link>
        <Badge pill bg="danger">{basket?.length}</Badge>{' '}
        <Link to="/sign-in">
          <Button variant="outline-light">SIGN IN</Button>
        </Link>
        </div>
      </Container>
    </Navbar>
  );
}
