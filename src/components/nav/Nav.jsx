import React from 'react'
import { Link } from 'react-router-dom'


export const Nav = () => {
  return (
    <>
    <nav>
     <ul>
        <li className='links'><Link to='/dog-adoption/'>HOME</Link></li>
        <li className='links'><Link to='/dog-adoption/about'>ABOUT</Link></li>
        <li className='links'><Link to='/dog-adoption/contact'>CONTACT</Link></li>
     </ul>
    </nav>
    </>
  )
}
