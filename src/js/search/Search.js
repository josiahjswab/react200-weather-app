import React from 'react';
import { updateCity, getWeather } from './searchActions';
import PropTypes from 'prop-types';

export default class Search extends React.Component{
    constructor(props){
        super(props);

        this.handleCityInput=this.handleCityInput.bind(this);
        this.clickHandler=this.clickHandler.bind(this);
        this.clickTab=this.clickTab.bind(this);
    }

handleCityInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCity(value));
}

clickHandler(event) {
    event.preventDefault();
    const { dispatch, city } = this.props;
    // good place for console log to inspect value going into action.
    dispatch(getWeather(city));
}

clickTab(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(getWeather(value));
}



    render(){
        const { city } = this.props;
        return(
            <div id='search'>
                <div id='tabs'>
                    <button value='San Diego' onClick={this.clickTab}>San    Diego</button>
                    <button value='Escondido' onClick={this.clickTab}>Escondido</button>
                    <button value='Los Angeles' onClick={this.clickTab}>Los Angeles</button>
                    <button value='Sacramento' onClick={this.clickTab}>Sacramento</button>
                    <button value='San Fransisco' onClick={this.clickTab}>San Fransisco</button>
                </div>
                <div>
                    <input 
                        id='search-input' 
                        type='text' 
                        value={city} 
                        onChange={this.handleCityInput}
                        placeholder='type city here'
                        />
                    <button id='search-button' type='submit' onClick={this.clickHandler}>Get Weather!</button>
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