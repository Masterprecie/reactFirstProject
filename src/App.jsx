import { useState } from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import Productive from './Components/Productive'
import Subscribe from './Components/Subscribe'
import Footer from './Components/Footer'
import { Stack } from '@chakra-ui/react'

const App = () => {
 
  return (
    <Stack w='100%'>
      <NavBar/>
      <HeroSection/>
      <Productive/>
      <Subscribe/>
      <Footer/>  
    </Stack>   
  )
}

export default App
