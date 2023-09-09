import React from 'react'
import { Link } from 'react-router-dom'


export const Nav = () => {
  return (
    <>
    <nav>
     <ul>
        <li className='links'><Link to='/'>HOME</Link></li>
        <li className='links'><Link to='/about'>ABOUT</Link></li>
        <li className='links'><Link to='/contact'>CONTACT</Link></li>
     </ul>
    </nav>
    </>
  )
}
