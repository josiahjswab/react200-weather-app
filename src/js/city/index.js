import { connect } from 'react-redux';
import City from './City';

function mapStoreToProps(store) {
    return {
        city: store.search.city,
        temp: store.search.temp,
        tempMin: store.search.tempMin,
        tempMax: store.search.tempMax,
        pressure: store.search.pressure,
        speed: store.search.speed,
        humidity: store.search.humidity,
        lat: store.search.lat,
        lon: store.search.lon,
        icon: store.search.icon
    };
}
export default connect(mapStoreToProps)(City);