import React from 'react'
import { Typography } from '@mui/material'

const WeatherDetails = (props) => {
  return (
    <Typography
      color={'#2D728C'}
      textAlign={'center'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      width={'90px'}
      margin={'0 auto'}
      variant='h6'
    >
      {props.icon}{props.text}
    </Typography>
  )
}

export default WeatherDetails
