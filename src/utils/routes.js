import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Services from '../Pages/Services/Services'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/our-projects' element={<Portfolio />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<Contact />} />
    </Routes>
  )
}

export default AllRoutes
