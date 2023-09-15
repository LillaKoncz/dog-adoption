import React from 'react'
import {PickedAppointment} from './PickedAppointment'
import './contact.css'


export const PickedDay = () => {
  return (
    <>
    <div className='title-container m-5'>
        <h1 className='time-title m-5'> Pick a time</h1>
    </div>

    <div className=' times-box m-5'>
        <div className='time'>10:00</div>
        <div className='time'>11:00</div>
        <div className='time'>12:00</div>
        <div className='time'>13:00</div>
        <div className='time'>14:00</div>
        <div className='time'>15:00</div>
        <div className='time'>16:00</div>
        <div className='time'>17:00</div>
    </div>

    <PickedAppointment/>


    </>
  )
}
