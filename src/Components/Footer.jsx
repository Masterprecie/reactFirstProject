import { HStack, Heading, Flex, Stack,Icon,Text, List, Link, ListItem, Spacer,IconButton, Box } from '@chakra-ui/react'
import React from 'react'
import logo from '../Assets/media/logo.png';
import {Image} from '@chakra-ui/react'
import {MdEmail} from 'react-icons/md'
import {TbPhoneCall} from 'react-icons/tb'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <div>
      <Box bg='#07043B' py='20' px='10' mt='-2'> 
        <Heading alignSelf='start' >
          <Image src={logo}/>       
        </Heading>

        <Box mt='5' display='flex'
          flexDirection={{
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
          base: 'column',
          }}>
       
          <Box color='white'
          flex="2"
          mb={{
            sm: '10',
            md: '0',
            lg: '0',
            xl: '0',
            base: '4',
          }} >
            <Box display='flex' alignItems='center'>
              <Icon color='white' mr='3' as={TbPhoneCall}/>
              <Text> Phone:+234-816-739-4074</Text>
            </Box>
            <Box display='flex' alignItems='center'>
              <Icon  color='white'mr='3' as={MdEmail}/>  
              <Text> Email : ikpaprecious2@gmail.com</Text>   
            </Box>         
          </Box>
         

          <Box color='white'
          flex="1"
          mb={{
            sm: '10',
            md: '0',
            lg: '0',
            xl: '0',
            base: '4',
          }}>
            <List>           
              <ListItem>
                <Link color='teal.400' href='#'>
                  About Us
                </Link>
                </ListItem>
              <ListItem>
                <Link color='teal.400' href='#'>
                  Jobs
                </Link>
                </ListItem>
              <ListItem>
                <Link color='teal.400' href='#'>
                  Press
                </Link>
                </ListItem>
              <ListItem>
                <Link color='teal.400' href='#'>
                  Blog
                </Link>
                </ListItem>
            </List>
          </Box>

          
          <Box color='white'
          flex="1"
          mb={{
            sm: '10',
            md: '0',
            lg: '0',
            xl: '0',
            base: '4',
          }}>
            <List>
            <ListItem>
                <Link color='teal.400' href='#'>
                  Contact Us
                </Link>
                </ListItem>
            <ListItem>
                <Link color='teal.400' href='#'>
                  Terms
                </Link>
                </ListItem>
            <ListItem>
                <Link color='teal.400' href='#'>
                  Privacy
                </Link>
                </ListItem>
            </List>
          </Box>

          <Box alignSelf='center'>
            <IconButton ml= '2' icon= {<FaFacebook/>} isRound='true'></IconButton>
            <IconButton ml= '2' icon= {<FaTwitter/>} isRound='true'></IconButton>
            <IconButton ml= '2' icon= {<FaInstagram/>} isRound='true'></IconButton>
          </Box>       
        </Box>
      </Box>
    </div>
  
  )
}

export default Footer