import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box/Box'
import { Typography } from '@mui/material'
import { currentTime, currentDate, doubleDigitTime } from '../../utils/utils'

const Clock = (props) => {
  const [time, setTime] = useState({ hour: '', minute: '' })
  //const [timeZoneOffset, setTimeZoneOffset] = useState(-1)
  function updateTime(timezone) {
    if (timezone !== -1) {
      let current = currentDate(timezone).toLocaleTimeString()
      setTime({
        hour: current.split(':')[0],
        minute: current.split(':')[1],
      })
    }
  }
  useEffect(() => {
    updateTime(props.timezone)
    const interval = setInterval(() => {
      updateTime(props.timezone)
      return () => clearInterval(interval)
    }, 1000)
  }, [])
  return (
    <Box className='clock'>
      <Typography
        color={'#2470A9'}
        textAlign={'center'}
        variant='h2'
        fontWeight={'600'}
      >
        {time.hour !== '' ? doubleDigitTime(time.hour) : ''}
      </Typography>
      <Typography
        color={'#2470A9'}
        textAlign={'center'}
        variant='h2'
        fontWeight={'600'}
        sx={{ position: 'relative', bottom: '13px' }}
      >
        {time.minute !== '' ? doubleDigitTime(time.minute) : ''}
      </Typography>
    </Box>
  )
}

export default Clock
