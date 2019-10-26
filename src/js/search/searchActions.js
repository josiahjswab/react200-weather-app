import axios from "axios";
import Search from "./Search";

//Action Creators
export function getWeather(city) {
  //good place to console log incoming event.
  console.log(typeof city);
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