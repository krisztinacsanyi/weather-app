import React from 'react'
import { ListItemButton, ListItemText } from '@mui/material'

const City = (props) => {
  return (
    <ListItemButton
      component='a'
      href='#city-list'
      key={props.city}
      sx={{ textAlign: 'center' }}
    >
      <ListItemText
        primary={props.city}
        className='city-name'
        id={props.city}
        key={props.city}
        onClick={props.selectCityHandler}
        primaryTypographyProps={{
          fontSize: '24px',
          color: '#93B7CC',
          fontWeight: '600',
        }}
      />
    </ListItemButton>
  )
}

export default City
