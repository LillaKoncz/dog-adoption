import React from 'react'
import {MONTHS, DATES, DAYS} from '../../CALENDER'
import './contact.css'
import { PickedDay } from './PickedDay'

export const Contact = () => {

  // variables for  year, month, dates, day
  const d = new Date();
  let year =d.getFullYear();
  let month =MONTHS[d.getMonth()];
  let date =d.getDate();
  let day =DAYS[d.getDay() - 1]



  return (
  <>
    <div className='calendar-instuctions'>
      <h3 className='instruction mx-5 px-5'>Here You can choose a day which is the best for You. </h3>
      <h3 className='instruction mx-5 px-5'>Than find a time! </h3>
      <h3 className='instruction mx-5 px-5 '>And You are ready. </h3>
  </div>

   
    <div className='calendar-title m-5'>
      <h1 className='date-title m-5'>Pick a day</h1>
    </div>

    <div className='dates m-5'>
    {DATES.map((dato, index) => (
          <div className='date-list' key={index}>
            <div className={`date-item ${dato === date ? 'current-date' : ''} 
            ${dato < date ? 'past-dates' : '' } ${dato > date ? 'free-choose-dates' : ''}`}>
              {dato}
            </div>
          </div>
        ))}
    </div>
    
    <PickedDay/>
    
    </>   
  )
}

