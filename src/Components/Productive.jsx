import { VStack, Text, Flex, Stack, Image, Spacer, Icon,Link, Box } from '@chakra-ui/react'
import React from 'react'
import bgCurveDesktop from '../Assets/media/bgCurveDesktop.png'
import illustration2 from '../Assets/media/illustration2.png'
import testimonial from '../Assets/media/testimonial.jpg'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'


const Productive = () => {
  

  return (
    <div>
      <Box display='flex' color='black' mt='-2' py='20' bgImage={bgCurveDesktop} 
        backgroundRepeat='no-repeat' backgroundSize='cover' bgPosition='center' 
        flexDirection={{
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
          base: 'column',
        }}>  
      <Box px='10'mt='50' alignItems='center'>
          <Text fontSize='3xl' fontWeight='bold' align={{ base: 'center', md:'left', lg:'left'}}>
            Stay Productive wherever you are
          </Text>
          <Text fontSize='1xl' alignItems='center' fontWeight='semibold' align={{ base: 'center', md:'left', lg:'left'}}> Never let location be an issue when accessing your files. Flyo has you covered for all of your file storage needs. Securely share files and folders with friends, family and colleagues for live collaborate. No email attachment required!
          </Text>
          <Flex alignItems='center'>
            <Text as='u' fontSize='1xl' fontWeight='semibold' >
              <Link color='teal.400' href='#'>
                 See How Flyo works
              </Link>
            </Text>
            <Icon color='green' ml='2' as={BsFillArrowRightCircleFill} /> 
          </Flex>
          <Box w='100% 'p='6' mt='4' boxShadow='lg' rounded='md' bg='white' >
            <Text>
              Flyo has improved our team productivity by an order of magnitude. Since makingthe switch, our team has become a well-oiled collaboration machine.
            </Text>
            <Box display='flex'alignItems='center' mt={5}>
              <Box>
                <Image w="80%" borderRadius='50%' src={testimonial}/>
              </Box>
              <Box w='100% '>
                <Text fontWeight='bold'>
                  Kyle Burton
                </Text>    
                <Text>
                  Founder & CE0 Hurdle
                </Text>    
              </Box>    
            </Box>
         </Box>
        </Box>
        
        <Box w='100%' pt='20'>
        <Image  w='100%'  src={illustration2} />
        </Box>    
     
    </Box>
    </div>
  )
}

      

export default Productive