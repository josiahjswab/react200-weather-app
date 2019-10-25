import { connect } from 'react-redux';
import History from './History';
import search from '../search';

function mapStoreToProps(store) {
    return {
        history: store.search.history,

    };
}
export default connect(mapStoreToProps)(History);