import './style.scss'
import {useSelector} from "react-redux";
import {generateImageURL, generateWeekName} from "../../api/Api";

export function ForecastDays() {
    const fiveDayData = useSelector(state => state.weather.fiveDayForecastData)

    return (
        <div className="forecast-days_grid content">
            <h3>5-DAY FORECAST</h3>
            <div className='forecasts-container'>
                {
                    fiveDayData?.map((item,index)=>{
                        return(
                            <div className='forecast' key={index}>
                                <p> {generateWeekName(item.Date)}</p>
                                <div>
                                    <img src={generateImageURL(item.Day.Icon)} alt="" title=''/>
                                    <h4>{item.Day.IconPhrase}</h4>
                                </div>
                                <div>
                                    <h4 className='degree'>{item.Temperature.Maximum.Value}</h4>
                                    <span>/</span>
                                    <p className='degree'>{item.Temperature.Minimum.Value}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
