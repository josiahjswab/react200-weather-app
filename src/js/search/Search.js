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
    dispatch(getWeather(city));
}

clickTab(event) {
    console.log('click');
    event.preventDefault();
    const { dispatch } = this.props;
    const { city } = event.target.value;
    dispatch(updateCity(city));
}

    render(){
        const { city } = this.props;
        return(
            <div id='search'>
                <div className='tabs'>
                    <button value='Warsaw' onClick={this.clickTab}>Warsaw</button>
                    <button>Bejing</button>
                    <button>Paris</button>
                    <button>Venice</button>
                    <button>Los Angeles</button>
                </div>
                <div>
                    <input 
                        id='search-input' 
                        type='text' 
                        value={city} 
                        onChange={this.handleCityInput}
                        placeholder='type city name here'
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