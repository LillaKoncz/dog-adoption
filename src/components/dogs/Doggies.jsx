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
  <div className='container'>
    <div onClick={handleClick} className='img'><img  className='dog-image' src={image} /></div>
  </div>

  {/* A nev hoverrel kell hogy megjelenjen*/}
    {/* az osszes kep linkkent mukodik es a kutyak profiljara visz. 
    Ehhez kell majd a Dogprofil componens*/}
   </>
  )
}

