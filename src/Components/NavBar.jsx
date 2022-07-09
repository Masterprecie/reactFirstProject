import React from 'react'
import logo from '../Assets/media/logo.png';
import {  Image } from '@chakra-ui/react';
import {  Heading,  Box,  Link } from '@chakra-ui/react'
import ToggleModeBtn from './ToggleModeBtn';


const NavBar = () => {	

  return (
    	<Box display='flex' px='10' pt='3' align='center' justifyContent='space-between'
      >
        <Heading>
          <Image src={logo}/>       
        </Heading>     
        <Box display={{base:'none', sm:'none', md:'flex', lg:'flex'}}
		  textDecoration='none'>
          <Link color='black' fontWeight='semibold'>Features</Link>
          <Link color='black'  fontWeight='semibold' pl={8}>Teams</Link>
          <Link color='black'  fontWeight='semibold' pl={8} pr={4}>Sign In</Link>
			 <ToggleModeBtn/>         
        </Box>  
    </Box>       
  )
}

export default NavBar