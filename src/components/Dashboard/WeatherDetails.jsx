import React from 'react'
import Box from '@mui/material/Box/Box'
import { getWeatherIcon } from '../../utils/weatherIcons'
import WeatherDetail from './WeatherDetail.jsx'

const WeatherDetails = (props) => {
  return (
    <Box className='weather-details'>
      <WeatherDetail
        icon={getWeatherIcon('Thermostat')}
        text={`${props.temperature}°C`}
      />
      <WeatherDetail
        icon={getWeatherIcon('Sunrise')}
        text={`${props.sunrise}`}
      />
      <WeatherDetail icon={getWeatherIcon('Sunset')} text={`${props.sunset}`} />
    </Box>
  )
}

export default WeatherDetails
