import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';

// Creating context for state management
const StateContext = createContext();  

 // API key for accessing weather data
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; 
console.log('key',API_KEY);

// Base URL for OpenWeatherMap API
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';  

export const StateContextProvider = ({ children }) => {
    // State for storing current weather data
    const [weather, setWeather] = useState({  
        wind: { speed: 0 },
        main: { humidity: 0, temp: 0, feels_like: 0 },
        weather: [{ description: '' }],
    });

    const [values, setValues] = useState([]);  
    const [place, setPlace] = useState('Lusaka');  
    const [thisLocation, setLocation] = useState('');  

    // Function to fetch current weather
    const getWeather = (city) => {
        return axios.get(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);  
    };

    // Function to fetch forecast
    const getForecast = (city) => {
        return axios.get(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`);  
    };

    // Fetching weather data
    const fetchWeather = async () => {
        try {
            const weatherData = await getWeather(place);  
            setWeather(weatherData.data);  
            console.log('weatherdata', weatherData.data);
            const forecastData = await getForecast(place);  
            setLocation(forecastData.data.city); 
            setValues(forecastData.data.list);  
            console.log('weather forecast', forecastData.data);
        } catch (e) {
            console.error(e);
            alert('This place does not exist');  // Handling error if place does not exist
        }
    };

    // Fetch weather and forecast data on component mount or when place changes
    useEffect(() => {
        fetchWeather();  
    }, [place]);

     // Logging forecast values when they change
    useEffect(() => {
        console.log(values); 
    }, [values]);

    return (
        <StateContext.Provider value={{ weather, setPlace, values, thisLocation, place }}>
            {children} 
        </StateContext.Provider>
    );
};

// Hook to access state context
export const useStateContext = () => useContext(StateContext);  
