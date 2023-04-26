import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useStateValue} from '../StateProvider'
import { getTotal } from '../reducer'

export default function Total() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <>
        <h5><strong>Productos: {basket?.length}</strong></h5>
        <h6>TOTAL: $ {getTotal(basket)}</h6>
        <hr />
        <Link to="/checkout">
          <Button className='m-2' variant='danger'>
            Ir a pagar
          </Button>
        </Link>
        <Link to="/menu">
          <Button variant='success'>
            Seguir Comprando
          </Button>
        </Link>
    </>
  )
}
