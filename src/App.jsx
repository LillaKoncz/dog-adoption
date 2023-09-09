import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from './components/home/Home'
import {About} from './components/about/About'
import {Contact} from './components/contact/Contact'
import {Adopt} from './components/dogs/Adopt'
import { Dogdetails } from './components/dogs/Dogdetails'
import {Nav} from './components/nav/Nav'


function App() {
  return (
    <>  
    <Router>
      <Nav/>
      <Routes>
        <Route path='/dog-adoption/' element={<Adopt/>}/>
        <Route path='/dog-adoption/about' element={<About/>} />
        <Route path='/dog-adoption/contact' element={<Contact/>}/>
        <Route path='/dog-adoption/dogdetails/:id' element={<Dogdetails/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
