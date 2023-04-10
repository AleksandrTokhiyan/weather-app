import './style.scss'
import {useSelector} from "react-redux";
import {generateHourTime, generateImageURL} from "../../api/Api";

export function ForecastHours() {

    const twelveHourData = useSelector(state => state.weather.twelveHourForecastData)
    return (
        <div className="forecast-hours_grid content">
            <h3>TODAY'S FORECAST</h3>
            <div className='forecasts-container'>
                {
                    twelveHourData?.map((item, index) => {
                        return (
                            <div className='forecast' key={index}>
                                <p> {generateHourTime(item.DateTime)}</p>
                                <img src={generateImageURL(item.WeatherIcon)} alt="" title=''/>
                                <h4 className='degree'>
                                    {item.Temperature.Value}
                                    <span/>
                                    {item.Temperature.Unit}
                                </h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
