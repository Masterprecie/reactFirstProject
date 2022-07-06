import { background, Button } from '@chakra-ui/react'
import React from 'react'

const Buttons = ({width, height, borderRadius, padding, color, Text}) => {
  return (
    <Button
      w={width}
      h={height}
      borderRadius={borderRadius}
      bg={'blue'}
      padding={padding}
      color={color}
      _hover={{
         bg:'blue'
      }}
    >{Text}</Button>
  )
}

export default Buttons