import React from 'react'
import { IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import City from './SelectCity.jsx/City'

const CitySelector = (props) => {
  return (
    <>
      <Box textAlign='center' maxWidth={'300px'} margin={'20px auto'}>
        {props.selectedCities.length > 0 ? (
          props.selectedCities.map((city) => (
            <City
              city={city}
              selectCityHandler={props.selectCityHandler}
              key={city}
            />
          ))
        ) : (
          <Typography
            sx={{
              fontSize: '24px',
              color: '#93B7CC',
              fontWeight: '600',
            }}
          >
            Choose a city
          </Typography>
        )}
      </Box>
      <Box textAlign='center'>
        <IconButton href='/new' size='large'>
          <AddIcon sx={{ color: '#02FF40', fontSize: '36px' }} />
        </IconButton>
      </Box>
    </>
  )
}

export default CitySelector
