import React from 'react'
import {DOGS} from '../../DOGS'
import { useParams } from 'react-router-dom';


export const Dogdetails = () => {
    const {id} = useParams();

    //Find the selected dog by id
    const selectedDog = DOGS.find(dog => dog.id === parseInt(id))

  return (
    <div>
    <h2 className='selected-name'>{selectedDog.name}</h2>
    <img className='selcted-img' src={selectedDog.image}/>
    <p className='selected-breed'>Breed: {selectedDog.breed}</p>
    <p className='selected-age'>Age: {selectedDog.age} years</p>
  </div>
  )
}
