import React from 'react';
import { PacmanLoader } from 'react-spinners';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null
        }
        this.getWeather = this.getWeather.bind(this);
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.getWeather);
    }

    getWeather(location) {
        let requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&APPID=6521b0c96b0603fa027407eb1cd6ad28`;
        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
                const data = JSON.parse(xmlhttp.responseText);
                this.setState({ weather: data });
            }
        };

        xmlhttp.open('GET', requestUrl, true);
        xmlhttp.send();
    }

    render() {
        if (this.state.weather) {
            const weather = this.state.weather;
            const temp = (weather.main.temp - 273.15) * 1.8 + 32;
            const weatherId = this.state.weather.weather[0].id;
            let weatherCityDiv = <div className="weather-city-div">
                <p className="weather-city">{weather.name}</p>
            </div>
            let weatherCityInfoDiv = <div className="weather-info">
                <p className="weather-info-text">{temp.toFixed(1)} degrees</p>
                <p className="weather-info-text">{weather.weather[0].description}</p>
            </div>

            if (weatherId >= 200 && weatherId < 600) {
                weatherCityDiv = <div className="weather-city-div rain">
                    <p className="weather-city">{weather.name}</p>
                </div>
                weatherCityInfoDiv = <div className="weather-info rain">
                    <p className="weather-info-text">{temp.toFixed(1)} degrees</p>
                    <p className="weather-info-text">{weather.weather[0].description}</p>
                </div>
            }

            if (weatherId >= 600 && weatherId < 700) {
                weatherCityDiv = <div className="weather-city-div snow">
                    <p className="weather-city">{weather.name}</p>
                </div>
                weatherCityInfoDiv = <div className="weather-info snow">
                    <p className="weather-info-text">{temp.toFixed(1)} degrees</p>
                    <p className="weather-info-text">{weather.weather[0].description}</p>
                </div>
            }

            if (weatherId === 800) {
                weatherCityDiv = <div className="weather-city-div clear">
                    <p className="weather-city">{weather.name}</p>
                </div>
                weatherCityInfoDiv = <div className="weather-info clear">
                    <p className="weather-info-text">{temp.toFixed(1)} degrees</p>
                    <p className="weather-info-text">{weather.weather[0].description}</p>
                </div>
            }

            if (weatherId > 800) {
                weatherCityDiv = <div className="weather-city-div cloudy">
                    <p className="weather-city">{weather.name}</p>
                </div>
                weatherCityInfoDiv = <div className="weather-info cloudy">
                    <p className="weather-info-text">{temp.toFixed(1)} degrees</p>
                    <p className="weather-info-text">{weather.weather[0].description}</p>
                </div>
            }

            return (
                <div>
                    <div id="weather">
                        <div className="weather-components">
                            {weatherCityDiv}
                            {weatherCityInfoDiv}
                        </div>
                    </div>
                </div>
            )
        } else {
        return (
            <div>
                <div id="weather">
                    <div className="weather-components">
                        <div className='loading'>
                            <div className='loading-icon'>
                                <PacmanLoader
                                    sizeUnit={"px"}
                                    size={15}
                                    color={'white'}
                                />
                            </div>
                            <p className="loading-words">loading weather</p>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
    }
}

export default Weather;