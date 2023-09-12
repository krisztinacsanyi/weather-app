export const addCityData = city => ({
    type: CITY_ADDED,
    payload: {
        city
    }
})

export function removeCityData(id) {
    return {
        type: CITY_REMOVED,
        payload: {
            id
        }
    }
}