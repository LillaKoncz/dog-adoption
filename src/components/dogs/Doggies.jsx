import React from 'react'
import'./dog.css'
import { useNavigate } from 'react-router-dom';



export const Doggies = (props) => {
  const {id, name, age, breed, image} = props.data;
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dog-adoption/dogdetails/${id}`)
  }
  
  return (
   <>
   <div className='wrapper-doggies m-4'>
    <div onClick={handleClick} className='img'>
      <img  className='dog-image' src={image} />
      <div className='dog-name'>
        <h6 className='text'>{name}</h6>
        </div>
      </div>
    </div>
   </>
  )
}

