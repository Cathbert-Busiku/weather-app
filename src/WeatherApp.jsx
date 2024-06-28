import { useState } from 'react';
import './WeatherApp.css';  
import search from './assets/icons/search.svg';  
import { useStateContext } from './Context';  
import { BackgroundLayout, WeatherCard, MiniCard, TodayWeather } from './Components';  
import 'bootstrap/dist/css/bootstrap.min.css'; 

function WeatherApp({input}) {
   
    // Destructuring state from context
    const { weather, thisLocation, values, place, setPlace } = useStateContext();  

  
    const today = new Date().toISOString().split('T')[0];  // Getting today's date in ISO format

    // Filter data for a specific time each day, e.g., 12:00:00
    const filteredValues = values.filter(curr => curr.dt_txt.includes('12:00:00'));

    // Filter data for today's weather
    const todayWeather = values.filter(curr => curr.dt_txt.startsWith(today));

    return (
        <div className="container-fluid text-white">
           
   
            {/* Background image based on weather */}
            <BackgroundLayout />

            {/* Main content */}
            <main className="row justify-content-center">
                {/* Current weather card */}
                <div className='col-xl-4 col-md-6 col-sm-12'>
                    {weather && weather.wind && weather.main && weather.weather && (
                        <WeatherCard
                            place={thisLocation}
                            windspeed={weather.wind.speed}
                            humidity={weather.main.humidity}
                            temperature={weather.main.temp}
                            heatIndex={weather.main.feels_like}
                            iconString={weather.weather[0].description}
                            conditions={weather.weather[0].description}
                        />
                    )}
                </div>

                {/* Today's weather cards */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center">
                            {todayWeather.map((curr) => (
                                <div key={curr.dt_txt} className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-2">
                                    <TodayWeather
                                        time={curr.dt_txt}
                                        temp={curr.main.temp}
                                        iconString={curr.weather[0].description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Weekly weather cards */}
            <div className="container-fluid mb-5">
                <div className='d-flex justify-content-center'>
                    <div className='card  bg-gradient-ibiza m-4'>
                        <h1 className="navbar-brand font-bold text-color tracking-wide m-3">Weather For The Week</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    {filteredValues.map((curr) => (
                        <div key={curr.dt_txt} className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-2">
                            <MiniCard
                                time={curr.dt_txt}
                                temp={curr.main.temp}
                                iconString={curr.weather[0].description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;
