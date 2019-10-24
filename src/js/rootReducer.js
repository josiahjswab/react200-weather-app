import { combineReducers } from 'redux';
import searchReducer from './search/searchReducer';

const rootReducer = combineReducers({
    //props from components gathered here.
    search: searchReducer
});

export default rootReducer;
