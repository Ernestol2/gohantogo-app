import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import logo from "../images/logo.jpg";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="logo-container"> 
          <img 
            src={logo} 
            alt="logo" 
            className="logo" />
        </Navbar.Brand>
        <div>
        <Cart color="white" size={30}/>
        <Badge bg="danger">3</Badge>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
