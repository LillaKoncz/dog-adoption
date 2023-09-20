import React from 'react'
import {DOGS} from '../../DOGS'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dogDetails.css'
import { useNavigate } from 'react-router-dom';



export const Dogdetails = () => {
    const {id} = useParams();

    //Find the selected dog by id
    const selectedDog = DOGS.find(dog => dog.id === parseInt(id))

    //useNavigate
    const navigate = useNavigate();

  return (
<div className='selected-container my-5'>
  <div className='data-box'>
    <img className='selected-img mx-5' src={selectedDog.image}/>
      <div className='datas'>
          <h1 className=' selected-name m-5'>{selectedDog.name}</h1>
        <div className='selected-p'>
            <p className='selected-breed mx-5'><span className='bold'>Breed:</span> {selectedDog.breed}</p>
             <p className='selected-age mx-5'><span className='bold'>Age:</span> {selectedDog.age} years</p>
              <p className='selected-description mx-5'>{selectedDog.description}</p>
              <button onClick={() => navigate('/dog-adoption/contact')} className=' selected-button btn btn-success m-5'>Get to know {selectedDog.name}!</button>
              <button onClick={() => navigate('/dog-adoption/')} className=' selected-button btn btn-primary mx-5 button-back'>Back</button>
        </div>
        </div>
      </div>
  </div>
  )
}
