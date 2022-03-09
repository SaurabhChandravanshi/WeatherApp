export const addWeatherData = (data) => {
    return {
        type:'ADD_WEATHER_DATA',
        payload:data
    }
}
export const changeLocation = (location) => {
    return {
        type:'ADD_LOCATION',
        payload:location
    }
}

export const changeLocationName = (locality) => {
    return {
        type:'ADD_LOCATION_NAME',
        payload:locality
    }
}