import {useState} from "react";
import axios from "axios";
import {AcuWeather_api_key, API_URL} from "constans";
import './style.scss'
import {search} from 'assets/image'


export function Search({locationKeyHandler, locationCityName}) {

    const [locationVariants, setLocationVariants] = useState(null);

    const autocompleteLocation = async (i) => {
        if (!i) {
            setLocationVariants(null);
        } else {
            axios.get(
                    `${API_URL}/locations/v1/cities/autocomplete?apikey=${AcuWeather_api_key}&q=${i}`
                )
                .then((res) => {
                    if (res.data.length && res.status === 200) {
                        setLocationVariants(res.data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });

        }

    };
    return (
        <div className="find-location_grid content">
            <div className='search-content'>
                <input
                    type="text"
                    className='search'
                    placeholder="Search for cities..."
                    onChange={(e) => {
                        e.preventDefault()
                        autocompleteLocation(e.target.value)
                    }}
                />
                <img src={search} alt="search" title='search' className='icon'/>
            </div>
            {locationVariants && (
                <ul className="find-location-versions-city">
                    {locationVariants.map((i) => (
                        <li
                            key={i.Key}
                            onClick={() => {
                                locationKeyHandler(i.Key);
                                locationCityName(i.LocalizedName);
                                setLocationVariants(null);
                            }}
                        >
                            {i.LocalizedName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
