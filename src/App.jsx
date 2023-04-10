import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.scss';
import {AirConditions, AsideLeft, CurrentDay, Diagram, ForecastDays, ForecastHours, Loaders, Search} from './components'
import {
    getCurrentForecast,
    getFiveDayForecastData,
    getTwelveHourForecastData,
    setLocationDataAC
} from "./redux/weather/actionCreater";

function App() {

    const [metric, setMetric] = useState(true);

    const dispatch = useDispatch()
    const locationKey = useSelector(state => state.weather.locationKey)
    const isFetching = useSelector(state => state.weather.isFetching)

    const changeAirTemperature = useCallback((bool) => {
        setMetric(bool)
    }, [metric])

    const locationKeyHandler = (key) => {
        if (key) {
            dispatch(getFiveDayForecastData(key, metric))
            dispatch(getTwelveHourForecastData(key, metric))
        }
    }

    const locationCityName = useCallback((city) => dispatch(setLocationDataAC(city)), [])

    const getIpAddress = useCallback(() => {
        dispatch(getCurrentForecast())

        locationKey && locationKeyHandler(locationKey);
    }, [locationKey])

    const getCurrentLocation = useCallback(() => {
        getIpAddress()
    }, [])

    useEffect(() => {
        getIpAddress();
    }, []);

    useEffect(() => {
        locationKeyHandler(locationKey);
    }, [metric, locationKey]);

    return (
        <>
            {isFetching
                ? <Loaders/>
                : <div className="grid-container">

                    <AsideLeft
                        changeAirTemperature={changeAirTemperature}
                        getCurrentLocation={getCurrentLocation}
                        metric={metric}
                    />
                    <Search
                        getCurrentLocation={getCurrentLocation}
                        locationKeyHandler={locationKeyHandler}
                        locationCityName={locationCityName}
                    />
                    <CurrentDay/>
                    <ForecastHours/>
                    <AirConditions/>
                    <Diagram/>
                    <ForecastDays/>
                </div>
            }
        </>
    );
}

export default App;
