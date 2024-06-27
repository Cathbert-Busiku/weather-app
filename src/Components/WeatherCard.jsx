/* eslint-disable react/prop-types */ 

import React, { useEffect, useState } from 'react';
import { useDate } from '../Utils/useDate'; 
import sun from '../assets/icons/sun.png'; 
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import wind from '../assets/icons/windy.png';
import '../assets/WeatherCard.css'; 

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);  // State for storing weather icon
  const { time } = useDate();

  useEffect(() => {
    // Effect to set icon based on iconString prop
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud);  
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain);  
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun); 
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm); 
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog); 
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow);  
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind); 
      }
    }
  }, [iconString]);  // Dependency array to trigger effect when iconString changes

  return (
    <div className="glass-card  p-4 mb-4">
      <div className="d-flex justify-content-center align-items-center gap-4 mt-4 mb-4">
        <img src={icon} alt="weather_icon" className="weather-icon" />  
        <p className="display-4 main-font font-weight-bold">{temperature} &deg;C</p> 
      </div>
      <div className="text-center font-weight-bold h5">
        {place.name}, {place.country}  
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <p className="text-center p-2 flex-fill">{new Date().toDateString()}</p>  
        <p className="text-center p-2 flex-fill">{time}</p>  
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4 gap-4">
        <p className="text-center p-card p-2 flex-fill font-weight-bold bg-gradient-ibiza text-white shadow rounded-lg">
          Wind Speed
          <p className="font-weight-normal">{windspeed} km/h</p>  
        </p>
        <p className="text-center  p-card p-2 flex-fill font-weight-bold rounded-lg bg-gradient-scooter text-white">
          Humidity
          <p className="font-weight-normal">{humidity} gm/m&#179;</p>
        </p>
      </div>
      <div className="w-full p-3 mt-4 d-flex justify-content-between align-items-center">
        <p className="font-weight-semibold h5">Heat Index</p>
        <p className="h5">{heatIndex ? heatIndex : 'N/A'}</p>  
      </div>
      <hr className="bg-secondary" />  
      <div className="w-full p-4 d-flex justify-content-center align-items-center display-4 font-weight-semibold">
        {conditions}  
      </div>
    </div>
  );
};

export default WeatherCard;
