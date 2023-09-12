import React from 'react'
import { Box, Button as MButton } from '@mui/material'

const Button = (props) => {
  return (
    <Box
      textAlign='center'
      maxWidth={'300px'}
      margin={'20px auto'}
      zIndex={'-1'}
    >
      {props.isButtonVisible ? (
        <MButton variant='contained' onClick={props.addCityHandler}>
          Save city
        </MButton>
      ) : (
        ''
      )}
    </Box>
  )
}

export default Button
