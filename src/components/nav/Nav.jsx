import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'


export const Nav = () => {
  return (
    <>
    <nav>
     <ul className='link-list my-4 mx-5'>
        <li className='links'><Link className='link' to='/dog-adoption/'>Home</Link></li>
        <li className='links'><Link className='link' to='/dog-adoption/contact'>Contact</Link></li>
     </ul>
    </nav>
    </>
  )
}
