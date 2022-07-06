import {Input,Spacer,Stack,Text, Box} from '@chakra-ui/react'
import React from 'react'
import Buttons from './Buttons'

const Subscribe = () => {
  return (
    <div>
    <Box display='flex' justifyContent='space-between' bg='#575989' py='20' px='10' mt='-2'
     flexDirection={{
      sm: 'column',
      md: 'column',
      lg: 'row',
      xl: 'row',
      base: 'column',
    }}>
      <Box w='100%' color='white'>         
          <Text fontWeight='semibold' fontSize='3xl'>
            Get early access today
          </Text>
          <Text w='80%'>
            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
          </Text>        
      </Box>        
      <Box w='100%' mt='3'>            
        <Input mb='3' placeholder='enter your email'/>
         <Buttons
          width='40%'
          height='40%'        
          Text='Get Started for free'
          padding='3'
          color='white'
          />    
      </Box>      
    </Box>
    </div>
  )
}

export default Subscribe