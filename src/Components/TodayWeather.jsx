/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import sun from '../assets/icons/sun.png';
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import wind from '../assets/icons/windy.png';
import '../assets/MiniCard.css'

const TodayWeather = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (iconString) { // Effect to set icon based on iconString prop
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
  }, [iconString]);

  return (
      <div className="mini-glass-card p-3 d-flex flex-column align-items-center">
        <p className="text-center mini-text">
            {new Date(time).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
        </p>
        <hr className="w-100" />
        <div className="w-50 d-flex justify-content-center align-items-center flex-grow-1">
          <img src={icon} alt="forecast not available" className="weather-icon" />
        </div>
        <p className="text-center font-weight-bold">{temp}&deg;C</p>
      </div>
  );
};

export default TodayWeather;
