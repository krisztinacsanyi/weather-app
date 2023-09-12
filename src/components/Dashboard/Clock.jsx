import React from 'react'
import Box from '@mui/material/Box/Box'
import { Typography } from '@mui/material'
import { doubleDigitTime } from '../../utils/utils'

const Clock = (props) => {
  return (
    <Box className='clock'>
      <Typography
        color={'#2470A9'}
        textAlign={'center'}
        variant='h2'
        fontWeight={'600'}
      >
        {props.hour !== '' ? doubleDigitTime(props.hour) : ''}
      </Typography>
      <Typography
        color={'#2470A9'}
        textAlign={'center'}
        variant='h2'
        fontWeight={'600'}
        sx={{ position: 'relative', bottom: '13px' }}
      >
        {props.minute !== '' ? doubleDigitTime(props.minute) : ''}
      </Typography>
    </Box>
  )
}

export default Clock
