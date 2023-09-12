import React, { useCallback } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Box, Popper } from '@mui/material'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'

const Select = (props) => {
  return (
    <Box
      textAlign='center'
      maxWidth={'300px'}
      margin={'20px auto'}
      zIndex={'100'}
    >
      <Autocomplete
        id='capital-cities'
        className='autocomplete'
        options={props.notSelectedCities}
        clearOnBlur
        clearOnEscape
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(event, value) => {
          props.changeCity(value)
        }}
        componentsProps={{
          paper: {
            sx: {
              bgcolor: '#142534',
              fontSize: '18px',
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
            },
          },
        }}
        filterOptions={useCallback((options, state) => {
          const results = props.filterOptions(options, state)
          return props.filterResults(results, 8)
        }, [])}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Capital city'
            sx={{ fontSize: '18px' }}
          />
        )}
        PopperComponent={(props) => {
          return <Popper {...props} style={{ zIndex: '100', width: '300px' }} />
        }}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option, inputValue, {
            insideWords: true,
          })
          const parts = parse(option, matches)
          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                      color: part.highlight ? '#91B7CC' : '#2575B1',
                    }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          )
        }}
      />
    </Box>
  )
}

export default Select
