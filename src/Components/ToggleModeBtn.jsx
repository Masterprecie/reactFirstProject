import React from 'react'
import {FaMoon, FaSun } from 'react-icons/fa'
import { IconButton, useColorMode } from '@chakra-ui/react'
 

const ToggleModeBtn = () => {
   const {colorMode, toggleColorMode }= useColorMode()

  return (
    <IconButton icon= { colorMode === 'dark'? <FaSun/> : <FaMoon/>}  onClick={toggleColorMode} />
  )
}

export default ToggleModeBtn