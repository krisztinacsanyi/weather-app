import { createSlice, nanoid } from "@reduxjs/toolkit"
import { capitalCities } from "../data/data"

const initialState = {
    selectedCities: [],
    currentCity: '',
    capitalCities
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        addCity: (state, action) => {
            state.selectedCities.push(action.payload.city)
        },
        chooseCity: (state, action) => {
            state.currentCity = action.payload.city
        }
    }
})

export const { addCity, chooseCity } = citySlice.actions
export default citySlice.reducer