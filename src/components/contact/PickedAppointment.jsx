import React from 'react'
import { Thanks } from './Thanks'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

 export const PickedAppointment = () => {
  return (
    <>
    <div className='picked-datas-container m-5'>
        <h2 className='picked-datas m-5'>15 September, 14:00 
        <FontAwesomeIcon className='px-3' icon={faPaw}/></h2>
    </div>

    <div className='button-container'>
    <button className=' m-5 book-button'>BOOK!</button>
    </div>
    
    {/*klikk utan teljesen oldalon ez a szoveg : Thanks for Your booking!*/}
    </>
  )
}

