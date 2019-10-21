import React from 'react';

export default class City extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id='city'>
                <div className='header'>City Information</div>
                <div className='city-info'>
                    <h1>Tokyo</h1>
                    <small>Lat/Long 35.69, 139.69</small>
                </div>
                <div className='city-stats'>
                    <div>
                        <p>Temperature</p>
                        <h5>65.62F</h5>
                    </div>
                    <div>                        
                        <p>Lowest Temp</p>
                        <h5>62.01F</h5>
                    </div>
                    <div>
                        <p>Highest Temp</p>
                        <h5>71.01F</h5>                        
                    </div>
                    <div>
                        <p>Pressure</p>
                        <h5>997</h5>
                    </div>
                    <div>
                        <p> Wind Speed</p>
                        <h5>24.16mph</h5>                        
                    </div>
                    <div>
                        <p>Humidity</p>
                        <h5>39%</h5>                        
                    </div>
                </div>
            </div>
        );
    }
}