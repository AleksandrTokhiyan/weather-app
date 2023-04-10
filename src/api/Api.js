import axios from "axios";
import {AcuWeather_api_key, API_URL, IpGeolocation_api_key} from 'constans'

export const ipAddressAPI = {
    async getIpAddress() {
        try {
            const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${IpGeolocation_api_key}`)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}

export const weatherAPI = {
    async getFiveDayForecastData(key, metric) {
        try {
            const response = await axios.get(`${API_URL}/forecasts/v1/daily/5day/${key}?apikey=${AcuWeather_api_key}&metric=${metric}&details=true`)
            return response.data
        } catch (e) {
            console.log(e)
        }
    },
    async getTwelveHourForecastData(key, metric) {
        try {
            const response = await axios.get(`${API_URL}/forecasts/v1/hourly/12hour/${key}?apikey=${AcuWeather_api_key}&metric=${metric}&details=true`)
            return response.data
        } catch (e) {
            console.log(e)
        }
    },
    async getCurrentForecast() {
        try {
            const currentIpAddress = await ipAddressAPI.getIpAddress()
            const response = await axios.get(`${API_URL}/locations/v1/cities/ipaddress?apikey=${AcuWeather_api_key}&q=${currentIpAddress.ip}`)
            return {...response.data, currentIpAddress}
        } catch (e) {
            console.log(e)
        }
    }
}


export function generateImageURL(iconNumber) {
    if (iconNumber) {
        const iconBaseUrl = 'https://developer.accuweather.com/sites/default/files/';
        return iconBaseUrl + iconNumber.toString().padStart(2, '0') + '-s.png'
    }
}

export const generateWeekName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-EN", {weekday: "long"});
};

export const generateHourTime = (date) => {
    return new Date(date).getHours() + ':00'
}
