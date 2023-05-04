import { Container, Nav, Navbar, Badge, Button } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import {Link} from 'react-router-dom';
import { auth } from "../firebase";
import logo from "../images/logo.jpg";
import {useStateValue} from '../StateProvider'
import { actionTypes } from "../reducer";

export default function Navigation() {

  const [{basket, user}, dispatch] = useStateValue();

  const handleSignOut = () => {
    if(user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      setTimeout(() => {
        window.location.href = "/"
      }, 1000)
    }
  }

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
        <h6 className="text-white">
        Hello {user? user.email : "Guest"}
        </h6>
        <Link to="/checkout-page">
          <Cart color="white" size={30}/>
        </Link>
        <Badge pill bg="danger">{basket?.reduce((acc, item) => item.quantity + acc, 0)}</Badge>{' '}
        <Link to="/sign-in">
          <Button 
            variant="outline-light"
            onClick={handleSignOut}
            >
            {user? "SIGN OUT" : "SIGN IN"}
          </Button>
        </Link>
        </div>
      </Container>
    </Navbar>
  );
}
