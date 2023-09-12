import React from 'react'
import Select from './NewCity.jsx/Select'
import Button from './NewCity.jsx/Button'

const AddCity = (props) => {
  return (
    <div>
      <Select
        notSelectedCities={props.notSelectedCities}
        filterOptions={props.filterOptions}
        filterResults={props.filterResults}
        changeCity={props.changeCity}
      />
      <Button
        isButtonVisible={props.isButtonVisible}
        addCityHandler={props.addCityHandler}
      />
    </div>
  )
}

export default AddCity
