import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import products from '../product-data'
import Products from './Products'


export default function Product() {
  return (
    <Container>
        <Row className='m-0'>
            {products?.map(product => (
                <Col className='g-3' key={product.id} xs={6} md={4} lg={3}>
                    <Products product={product}/>
                </Col>
            ))}
        </Row>
    </Container>
  )
}