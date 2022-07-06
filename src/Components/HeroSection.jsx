import { Flex, VStack,Text, Spacer, Input, Button, Stack, Box } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
import illustration1 from '../Assets/media/illustration1.png'
import Buttons from './Buttons'

const HeroSection = () => {
  return (
    <div>
    <Box display='flex' justifyContent='space-between' color='black' mt='-2' 
    flexDirection={{
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
              base: 'column',
            }}> 
      <Box px='10'mt='10' alignItems='center' w='100%' >
        <Text fontSize='3xl' fontWeight='bold'>
          All your files in one secure location, accessible anywhere.
        </Text>
        <Text fontSize='1xl' alignItems='center' fontWeight='semibold'> Flyo stores your most important files in one   secure location. Access  them wherever you need, share and   collaborate with friends, family and co-workers.
        </Text>
        <Box display='flex' mt='8'>
          <Input bg='white' color='black' w='40%' mr='5' placeholder='Enter your email' />          
          <Buttons
          width='40%'
          height='40%'        
          Text='Get Started'
          padding='3'
          color='white'
          />
        </Box> 
      </Box>  
      <Spacer></Spacer>
      <Box w='100%'>
      <Image w='100%' src={illustration1} />
        
      </Box>       
      
    </Box>
    </div>
  )
}

export default HeroSection