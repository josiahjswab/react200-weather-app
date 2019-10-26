import moment from 'moment';

const defaultState = {
        city: '',
        temp: '',
        tempMin: '',
        tempMax: '',
        pressure: '',
        humidity: '',
        speed: '',
        lat: '0',
        lon: '0',
        icon: '50d',
        history: [],
        
};

export default function searchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch(type) {
        case 'GET_WEATHER_FULFILLED': {
            return {
                ...state,
                city: payload.data.name,
                temp: payload.data.main.temp,
                tempMin: payload.data.main.temp_min,
                tempMax: payload.data.main.temp_max,
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                speed: payload.data.wind.speed,
                lat: payload.data.coord.lat,
                lon: payload.data.coord.lon,
                icon: payload.data.weather[0].icon,
                history: [...state.history,{
                    city: payload.data.name,
                    date: moment().format('l'),
                    time: moment().format('h:mm:ss a'),
                    lat: payload.data.coord.lat,
                    lon: payload.data.coord.lon
                }]
                    
            };
        }
        case "GET_WEATHER-REJECTED": {
            return {
                ...state,
                error: "something went wrong."
            };
        }
        case 'UPDATE_CITY': {
            return {
                ...state,
                city: payload.city
            };
        }
        default: {
            return state;
        }
    }
}