import { connect } from 'react-redux';
import City from './City';

function mapStoreToProps(store) {
    return {
        city: store.search.name,
        temp: store.search.temp,
        tempMin: store.search.tempMin,
        tempMax: store.search.tempMax,
        pressure: store.search.pressure,
        speed: store.search.speed,
        humidity: store.search.humidity,
        lat: store.search.lat,
        lon: store.search.lon
    };
}
export default connect(mapStoreToProps)(City);