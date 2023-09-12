
import React from 'react'
import { chooseCity } from '../slices/citySlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CitySelector from '../components/CitySelector'

export default function SelectCity() {
  // Set initial states, access neccessary functions and data
  const selectedCities = useSelector((state) => state.selectedCities)
  const navigate = useNavigate()
  const disPatch = useDispatch()
  // Add handler to save selected city and navigate to dashboard
  const selectCityHandler = (e) => {
    disPatch(chooseCity({ city: e.target.parentNode.id }))
    navigate('/dashboard')
  }
  return <CitySelector selectedCities={selectedCities} selectCityHandler={selectCityHandler}/>
}
