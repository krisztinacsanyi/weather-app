import React from 'react'
import Box from '@mui/material/Box/Box'
import { Typography } from '@mui/material'

const CityName = (props) => {
  return (
    <Box className='city-name'>
      <Typography
        color={'#91B7CC'}
        textAlign={'center'}
        variant='h4'
        fontWeight={'700'}
      >
        {props.city}
      </Typography>
    </Box>
  )
}

export default CityName
