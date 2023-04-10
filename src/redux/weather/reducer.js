import {initialState} from "./initialState";
import {
    SET_CURRENT_DAY,
    SET_FIVE_DAY_FORECAST_DATA,
    SET_LOCATION_DATA,
    SET_LOCATION_KEY, SET_TWELVE_HOUR_FORECAST_DATA,
    SET_WEATHER_DATA, TOGGLE_IS_FETCHING
} from "./actionType";

export const weatherReducer =  (state = initialState, action) => {
    switch (action.type) {
        case SET_FIVE_DAY_FORECAST_DATA:
            return {
                ...state,
                fiveDayForecastData: [...action.payload.fiveDayForecastData]
            }
        case SET_TWELVE_HOUR_FORECAST_DATA:
            return {
                ...state,
                twelveHourForecastData: [...action.payload.twelveHourForecastData]
            }
        case SET_LOCATION_DATA:
            return {
                ...state,
                locationData: {
                    ...state.locationData,
                    region: action.payload.newRegion
                }
            }
        case SET_LOCATION_KEY:
            return {
                ...state,
                locationKey: action.payload.key
            }
        case SET_WEATHER_DATA:
            return {
                ...state,
                graphicData: {...action.payload.dataWeatherGraphic}

            }
        case SET_CURRENT_DAY:
            return {
                ...state,
                currentDay: {...action.payload.newCurrentDay}

            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload.isFetching

            }
        default:
            return state
    }
}
