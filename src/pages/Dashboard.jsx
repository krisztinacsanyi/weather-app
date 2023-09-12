import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { currentTime, currentDate } from '../utils/utils'
import { Typography } from '@mui/material'
import BackToSelector from '../components/BackToSelector'
import Box from '@mui/material/Box/Box'
import WeatherDetails from '../components/Dashboard/WeatherDetails'
import Clock from '../components/Dashboard/Clock'
import CityName from '../components/Dashboard/CityName'
import WeatherCondition from '../components/Dashboard/WeatherCondition'
import { LoadingButton } from '@mui/lab'

export default function Dashboard() {
  // Setting up states and initial values
  const currentCity = useSelector((state) => state.currentCity)
  const [weather, setWeather] = useState('')
  const [isLoading, setLoading] = useState(true)
  const [time, setTime] = useState({ hour: '', minute: '' })
  const [timeZoneOffset, setTimeZoneOffset] = useState(-1)
  // Clock mechanism
  const interval = setInterval(() => {
    if (timeZoneOffset !== -1) {
      let current = currentDate(timeZoneOffset).toLocaleTimeString()
      setTime({
        hour: current.split(':')[0],
        minute: current.split(':')[1],
      })
    }
    if (time.hour !== '' && time.minute !== '') setLoading(false)
    return () => clearInterval(interval)
  }, 1000)
  // Loading wheater data
  useEffect(() => {
    setTimeZoneOffset(-1)
    if (currentCity !== '') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          setTimeZoneOffset(data.timezone)
          setWeather({
            city: currentCity,
            temperature: Math.round(data.main.temp),
            condition: data.weather[0].main,
            conditionDesc: data.weather[0].description,
            sunrise: currentTime(data.timezone, data.sys.sunrise),
            sunset: currentTime(data.timezone, data.sys.sunset),
            localDate: currentDate(data.timezone, data.dt),
          })
        })
    }
  }, [])
  // The whole page pieced together
  return (
    <div className='main-container'>
      <>
        <BackToSelector />
        {currentCity !== '' ? ( // Check if we have a currently selected city
          <div className='dashboard-container'>
            {isLoading ? ( // Show loading while we fetch and calculate all data
              <Box color={'#2D728C'} textAlign={'center'}>
                <LoadingButton loading sx={{ color: '#2D728C' }} size='large' />
              </Box>
            ) : (
              // Show desired data
              <Box textAlign={'center'}>
                <Clock hour={time.hour} minute={time.minute} />
                <CityName city={weather.city} />
                <WeatherCondition
                  condition={weather.condition}
                  conditionDesc={weather.conditionDesc}
                />
                <WeatherDetails
                  temperature={weather.temperature}
                  sunrise={weather.sunrise}
                  sunset={weather.sunset}
                />
              </Box>
            )}
          </div>
        ) : (
          // If no city selected, let the user know
          <Typography variant='subtitle1' component='div'>
            No city selected yet
          </Typography>
        )}
      </>
    </div>
  )
}
