import React, { useEffect, useState } from 'react';
import { useStateContext } from '../Context';  
import Clear from '../assets/images/Clear.jpg'; 
import Fog from '../assets/images/fog.png';
import Cloudy from '../assets/images/Cloudy.jpg';
import Rainy from '../assets/images/Rainy.jpg';
import Snow from '../assets/images/snow.jpg';
import Stormy from '../assets/images/Stormy.jpg';
import Sunny from '../assets/images/Sunny.jpg';
import '../assets/BackgroundLayout.css';  

const BackgroundLayout = () => {
  const { weather } = useStateContext();  
  const [image, setImage] = useState(Clear); 
  useEffect(() => {
    // Effect to update background image based on weather description
    if (weather.weather && weather.weather.length > 0) {
      const weatherDescription = weather.weather[0].description.toLowerCase();
      if (weatherDescription.includes('clear')) {
        setImage(Clear);  
      } else if (weatherDescription.includes('cloud')) {
        setImage(Cloudy);  
      } else if (weatherDescription.includes('rain') || weatherDescription.includes('shower')) {
        setImage(Rainy);  
      } else if (weatherDescription.includes('snow')) {
        setImage(Snow); 
      } else if (weatherDescription.includes('fog')) {
        setImage(Fog); 
      } else if (weatherDescription.includes('thunder') || weatherDescription.includes('storm')) {
        setImage(Stormy);  // Set image to stormy weather if description includes 'thunder' or 'storm'
      }
    }
  }, [weather]);  

  return (
    <img src={image} alt="weather_image" className="background-image" />  // Render the background image
  );
};

export default BackgroundLayout;
