import {React, udState, useState} from 'react'
import {PickedAppointment} from './PickedAppointment'
import './contact.css'


export const PickedDay = () => {





  return (
    <>
    <div className='title-container m-5'>
        <h1 className='time-title m-5'> Pick a time</h1>
    </div>

  

    <PickedAppointment />


    </>
  )
}
