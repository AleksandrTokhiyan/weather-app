import './style.scss'
import {animationWeather} from "assets/image";

export function Loaders () {
    return (
        <div className='loaders'>
            <img src={animationWeather} alt="loaders"/>
        </div>
    )
}
