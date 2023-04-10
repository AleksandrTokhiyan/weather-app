import './style.scss'
import {useSelector} from "react-redux";
import {generateImageURL} from "../../api/Api";

export function CurrentDay() {

    const currentCity = useSelector(state => state.weather.locationData?.region)
    const currentWeatherInfo = useSelector(state => state.weather.currentDay)

    return (
        <div className="current-day_grid">
            <div className='aside-left'>
                <div>
                    <h3>{currentCity}</h3>
                    <p>Chance of raine: {currentWeatherInfo?.Day.RainProbability}%</p>
                </div>
                <h2>
                    {currentWeatherInfo?.Temperature.Maximum.Value}
                    <span/>
                    {currentWeatherInfo?.Temperature.Maximum.Unit}

                </h2>

            </div>
            <div className='icon-content'>
                <img src={generateImageURL(currentWeatherInfo?.Day.Icon)} alt="icon"/>
            </div>
        </div>
    )
}
