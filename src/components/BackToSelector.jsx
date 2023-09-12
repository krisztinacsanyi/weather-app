import React from 'react'
import Button from '@mui/material/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

const BackToSelector = () => {
  return (
    <div className='back-to-selector'>
      <Button href='/'>
        <ArrowBackIosIcon />
      </Button>
    </div>
  )
}

export default BackToSelector
