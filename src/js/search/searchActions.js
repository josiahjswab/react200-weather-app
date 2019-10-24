import axios from "axios";

//Action Creators
export function getWeather(city) {
  return {
    type: 'GET_WEATHER',
    payload: axios.get(`/weather/${ city }`)  
  };
}
export function updateCity(city) {
  return {
    type: 'UPDATE_CITY',
    payload: {city}
  };
}