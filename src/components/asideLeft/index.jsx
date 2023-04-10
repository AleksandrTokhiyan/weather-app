import './style.scss'
import {celsius, fahrenheit, location} from 'assets/image/icons'
import {animationWeather} from 'assets/image'


export function AsideLeft({metric, changeAirTemperature, getCurrentLocation}) {

    return (
        <div className="aside-left_grid content">
            <img src={animationWeather} alt=""/>
            <button onClick={getCurrentLocation}>
                <img className='icon' src={location} alt="location" title='location'/>
            </button>
            <div className='switch-content'>
                <button onClick={() => changeAirTemperature(true)} disabled={metric} className={metric && `disable`}>
                    <img className='icon' src={celsius} alt="celsius" title='celsius'/>
                </button>
                <button onClick={() => changeAirTemperature(false)} disabled={!metric} className={!metric ? `disable` : ''}>
                    <img className='icon' src={fahrenheit} alt="fahrenheit" title='fahrenheit'/>
                </button>
            </div>
        </div>
    )
}
