import React from 'react'
import { Facebook, Instagram, Whatsapp } from 'react-bootstrap-icons'
 
export default function Footer() {
  return (
    <div className='footer'>
        <div className='social'>
            <Facebook />
            <Instagram />
            <a href="https://wa.me/56956227442">
              <Whatsapp />
            </a>
        </div>
        <div className='text-footer'>
            <p>©Ernesto Lopez. 2023. Todos los derechos reservados.</p>
        </div>
    </div>
  )
}

