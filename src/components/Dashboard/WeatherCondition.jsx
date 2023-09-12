import React from 'react'
import Box from '@mui/material/Box/Box'
import { Typography } from '@mui/material'
import { getWeatherIcon } from '../../utils/weatherIcons'

const WeatherCondition = (props) => {
  return (
    <Box className='weather-condition' color={'#3893B1'} textAlign={'center'}>
      {getWeatherIcon(props.condition)}
      <Typography
        color={'#91B7CC'}
        textAlign={'center'}
        variant='h6'
        sx={{ position: 'relative', bottom: '13px' }}
        fontSize={'18px'}
      >
        {props.conditionDesc}
      </Typography>
    </Box>
  )
}

export default WeatherCondition
