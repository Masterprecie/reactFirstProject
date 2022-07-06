import { useState } from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import Productive from './Components/Productive'
import Subscribe from './Components/Subscribe'
import Footer from './Components/Footer'


const App = () => {
 
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Productive/>
      <Subscribe/>
      <Footer/>  
    </>
  )
}

export default App
