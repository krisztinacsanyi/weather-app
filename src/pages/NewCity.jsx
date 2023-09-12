import AddCity from '../components/AddCity'
import BackToSelector from '../components/BackToSelector'
import React, { useState } from 'react'
import { addCity } from '../slices/citySlice'
import { useSelector, useDispatch } from 'react-redux'
import { filterResults } from '../utils/utils'
import { useNavigate } from 'react-router-dom'
import { createFilterOptions } from '@mui/material'

export default function NewCity() {
  // Set initial states, access neccessary functions and data
  const disPatch = useDispatch()
  const navigate = useNavigate()
  const filterOptions = createFilterOptions()
  const capitalCities = useSelector((state) => state.capitalCities)
  const [currentCity, setCurrentCity] = useState('')
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const [selectedCities, setSelectedCities] = useState(
    useSelector((state) => state.selectedCities) // Get and set selected cities
  )
  const [notSelectedCities, setNotSelectedCities] = useState(
    capitalCities.filter((city) => !selectedCities.includes(city)) // Filter the capital city list with the selected cities
  )
  // Save button toggle and save city in state
  const changeCity = (city) => {
    if (city == null) {
      setIsButtonVisible(false)
    } else {
      setIsButtonVisible(true)
      setCurrentCity(city)
    }
  }
  // Save city to storage, filter not selected cities and navigate to the main page
  const addCityHandler = () => {
    disPatch(addCity({ city: currentCity }))
    setSelectedCities((old) => [...old, currentCity])
    setNotSelectedCities(
      notSelectedCities.filter((item) => item !== currentCity)
    )
    navigate('/')
  }
  return (
    <>
      <BackToSelector />
      <AddCity
        notSelectedCities={notSelectedCities}
        filterOptions={filterOptions}
        filterResults={filterResults}
        changeCity={changeCity}
        isButtonVisible={isButtonVisible}
        addCityHandler={addCityHandler}
      />
    </>
  )
}
