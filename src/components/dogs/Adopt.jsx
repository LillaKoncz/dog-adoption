import React from 'react'
import {Doggies} from './Doggies'
import {DOGS} from '../../DOGS'
import'./dog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

 export const Adopt = () => {
  return (
    <>
    <div className='title m-5'>
      <h1>Dogs to Adoption</h1>
      <p className='mx-5' >Get to know our lovely dogs who are waiting for a loving owner</p>
      <FontAwesomeIcon className='paw mx-5' icon={faPaw}/>
    </div>

    <div className='doggies'>{DOGS.map((dog) => (
      <Doggies key={dog.id} data={dog}/>
    ))}</div>
    </>
  )
}

