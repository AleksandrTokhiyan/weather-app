import './style.scss'
import {drop, thermometer, wind} from "../../assets/image";
import {useSelector} from "react-redux";

export function AirConditions() {

    const currentWeatherInfo = useSelector(state => state.weather.currentDay)

    return (
        <div className="air-conditions_grid content">
            <h3>AIR CONDITIONS</h3>
            <div className='air-conditions-container'>
                <div className='item'>
                    <img className='icon' src={thermometer} alt="" title=""/>
                    <div>
                        <p>Reel Feel</p>
                        <h5>
                            {currentWeatherInfo?.RealFeelTemperatureShade.Maximum.Value}
                            <span/>
                            {currentWeatherInfo?.RealFeelTemperatureShade.Maximum.Unit}
                        </h5>
                    </div>
                </div>
                <div className='item'>
                    <img className='icon' src={wind} alt="" title=""/>
                    <div>
                        <p>Wind</p>
                        <h5>{currentWeatherInfo?.Day.Wind.Speed.Value} {currentWeatherInfo?.Day.Wind.Speed.Unit}</h5>
                    </div>
                </div>
                <div className='item'>
                    <img className='icon' src={drop} alt="" title=""/>
                    <div>
                        <p>Chance of raine: </p>
                        <h5>{currentWeatherInfo?.Day.RainProbability}%</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
