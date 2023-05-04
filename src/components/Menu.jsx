import Accordion from 'react-bootstrap/Accordion';
import Product from './Product';

function Menu() {
      

  return (
    <Accordion className='menu'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Entradas</Accordion.Header>
        <Accordion.Body>
          <Product />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Menu;