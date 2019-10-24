const defaultState = {
        city: '',
        temp: '',
        tempMin: '',
        tempMax: '',
        pressure: '',
        humidity: '',
        speed: '',
        lat: '',
        lon: '',
        
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
                lon: payload.data.coord.lon
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