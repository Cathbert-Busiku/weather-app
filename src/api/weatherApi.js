import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const getWeather = (city) => {
  return axios.get(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);
};

const getWeatherByCoords = (lat, lon) => {
  return axios.get(`${BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
};

const getForecast = (city) => {
  return axios.get(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`);
};

const getForecastByCoords = (lat, lon) => {
  return axios.get(`${BASE_URL}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
};

export { getWeather, getWeatherByCoords, getForecast, getForecastByCoords };
