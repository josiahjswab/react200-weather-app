import React from 'react';
import { updateCity, getWeather } from './searchActions';
import PropTypes from 'prop-types';
import Tabs from './Tabs';

export default class Search extends React.Component{
    constructor(props){
        super(props);

        this.handleCityInput=this.handleCityInput.bind(this);
        this.clickHandler=this.clickHandler.bind(this);
    }

handleCityInput(event) {
    //dispatch is provided by connect
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCity(value));
}

clickHandler(event) {
    event.preventDefault();
    const { dispatch, city } = this.props;
    dispatch(getWeather(city));
}

    render(){
        const { city } = this.props;
        return(
            <div id='search'>
                <Tabs/>
                <div>
                    <input id='search-input' type='text' value={city} onChange={this.handleCityInput} />
                    <button id='search-button' type='submit' onClick={this.clickHandler}>Go!</button>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    dispatch: PropTypes.func,
    city: PropTypes.string,
    value: PropTypes.string
  };