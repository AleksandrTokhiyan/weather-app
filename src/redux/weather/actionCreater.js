import {
    SET_CURRENT_DAY,
    SET_FIVE_DAY_FORECAST_DATA,
    SET_LOCATION_DATA,
    SET_LOCATION_KEY,
    SET_TWELVE_HOUR_FORECAST_DATA,
    SET_WEATHER_DATA, TOGGLE_IS_FETCHING
} from "./actionType";
import {generateHourTime, weatherAPI} from "api/Api";

const setCurrentDayAC = (newCurrentDay) => ({
    type: SET_CURRENT_DAY,
    payload: {
        newCurrentDay
    }
})
const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    payload: {
        isFetching
    }
})
const setFiveDayForecastDataAC = (fiveDayForecastData) => ({
    type: SET_FIVE_DAY_FORECAST_DATA,
    payload: {
        fiveDayForecastData
    }
})
const setTwelveHourForecastDataAC = (twelveHourForecastData) => ({
    type: SET_TWELVE_HOUR_FORECAST_DATA,
    payload: {
        twelveHourForecastData
    }
})
const setWeatherDataAC = (dataWeatherGraphic) => ({
    type: SET_WEATHER_DATA,
    payload: {
        dataWeatherGraphic
    }
})
export const setLocationDataAC = (newRegion) => ({
    type: SET_LOCATION_DATA,
    payload: {
        newRegion
    }
})
export const setLocationKeyAC = (key) => ({
    type: SET_LOCATION_KEY,
    payload: {
        key
    }
})


export const getFiveDayForecastData = (key, metric) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await weatherAPI.getFiveDayForecastData(key, metric)
    dispatch(setFiveDayForecastDataAC(data.DailyForecasts))
    dispatch(setCurrentDayAC(data.DailyForecasts[0]))
    dispatch(toggleIsFetching(false))
}
export const getTwelveHourForecastData = (key, metric) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await weatherAPI.getTwelveHourForecastData(key, metric)
    const hours = data.map(item => generateHourTime(item.DateTime))
    const temperatures = data.map(item => item.Temperature.Value)
    dispatch(setWeatherDataAC({hours, temperatures}))
    dispatch(setTwelveHourForecastDataAC(data))
    dispatch(toggleIsFetching(false))
}
export const getCurrentForecast = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await weatherAPI.getCurrentForecast()
    dispatch(setLocationDataAC(data.LocalizedName))
    dispatch(setLocationKeyAC(data.Key))
    dispatch(toggleIsFetching(false))
}
