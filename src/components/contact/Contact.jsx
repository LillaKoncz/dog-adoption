import {React, useState}  from 'react'
import {MONTHS, DATES, DAYS, HOURS} from '../../CALENDER'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';


export const Contact = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [book, setbook] = useState(false);

  // variables for  year, month, dates, day
  const d = new Date();
  let year =d.getFullYear();
  let month =MONTHS[d.getMonth()];
  let date =d.getDate();
  let day =DAYS[d.getDay() - 1]


  const handleBooking = () =>{
    setbook(true);
  }


  const chooseDate = (dato) => {
    setSelectedDate(dato);
    setSelectedHour('');
  };
  
  const chooseHour = (hour) => {
    setSelectedHour(hour);
  };


  return (
  <>
    <div className='calendar-instuctions'>
      <h3 className='instruction mx-5 px-3 '>Here You can choose a day which is the best for You. </h3>
      <h3 className='instruction mx-5 px-3 '>Than find a time! </h3>
      <h3 className='instruction mx-5 px-3 '>And You are ready. </h3>
  </div>

   {/* DAYS */}
    <div className='calendar-title m-5'>
      <h1 className='date-title m-5'>Pick a day</h1>
    </div>

    <div className='dates m-5'>
    {DATES.map((dato, index) => (
          <div className='date-list' key={index} >
            <div onClick={() => chooseDate(dato)}  
            className={`date-item ${dato === date ? 'current-date' : ''} 
            ${dato < date ? 'past-dates' : '' } ${dato > date ? 'free-choose-dates' : ''}
            ${dato === selectedDate ? 'selected' : '' }
            `}
            >
              {dato}
            </div>
          </div>
        ))}
    </div>


    {/* TIMES */}
    <div className='calendar-title m-5'>
      <h1 className='date-title m-5'>Pick a time</h1>
    </div>

    <div className='times-box m-5'>
      {HOURS.map((hour, index) => (
        <div className='time-list' key={index}>
            <div onClick={() => chooseHour(hour)} className={`time-item ${selectedHour === hour ? 'selected' : ''}`}>{hour} : 00</div>
        </div>
      ))}

    </div>

        {/* display picked datum and hours  */}

        <div className='picked-datas-container m-5'>
        <h2 className='picked-datas m-5'>
        {selectedDate ? `${selectedDate} ${month}` : ''}
          {selectedHour ? `, ${selectedHour}:00` : ''}
          <FontAwesomeIcon className='icon' icon={faPaw}/></h2>
    </div>

    <div className='button-container'>

   
        <button className='m-5 book-button' onClick={handleBooking}>
        {book ? 'Thanks for Your booking!' : 'BOOK!'}
        </button>
  
    
    </div>
    
    {/*klikk utan teljesen oldalon ez a szoveg : Thanks for Your booking!*/}
    </>   
  )
}

