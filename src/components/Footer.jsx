import React from 'react'
import { Facebook, Instagram, Whatsapp } from 'react-bootstrap-icons'
 
export default function Footer() {
  return (
    <div className='footer'>
        <div className='social'>
            <a href="https://web.facebook.com/sweetstogo/" target="_blank">
              <Facebook />
            </a>
            <a href="http://instagram.com/gohantogo/" target="_blank">
              <Instagram />
            </a>
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

