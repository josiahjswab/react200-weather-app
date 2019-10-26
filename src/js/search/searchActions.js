import axios from "axios";

//Action Creators
export function getWeather(city) {
  //good place to console log incoming event.
  return {
    type: 'GET_WEATHER',
    payload: axios.get(`/search/${ city }`)
  };
}

export function updateCity(city) {
  return {
    type: 'UPDATE_CITY',
    payload: {city}
  };
}