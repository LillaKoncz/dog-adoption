import React from 'react'
import {Doggies} from './Doggies'
import {DOGS} from '../../DOGS'
import'./dog.css'
import {About} from '../about/About'

 export const Adopt = () => {
  return (
    <>
    <div className='title'>
      <h1>Dogs You can adopt</h1>
    </div>

    <div className='doggies'>{DOGS.map((dog) => (
      <Doggies data={dog}/>
    ))}</div>
    </>
  )
}

