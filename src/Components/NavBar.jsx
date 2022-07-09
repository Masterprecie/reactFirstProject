import React from 'react'
import logo from '../Assets/media/logo.png';
import { IconButton, Image, Text } from '@chakra-ui/react';
import { HStack, Heading, Spacer, Box, Link } from '@chakra-ui/react'
import ToggleModeBtn from './ToggleModeBtn';
import { GiHamburgerMenu } from 'react-icons/Gi';

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
          <IconButton
          aria-label='Open Menu'
          size='lg'
          mr='2'
          icon={<GiHamburgerMenu/>}
          display={{base:'flex', sm:'flex', md:'flex', lg:'none'}}
          /> 
			 <ToggleModeBtn/>         
        </Box>  
    </Box>       
  )
}

export default NavBar