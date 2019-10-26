import React from 'react';

export default class City extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { city, temp, tempMin, tempMax, pressure, humidity, speed, lon, lat, icon } = this.props;
        return(
            <div id='city'>
                <div className='header'>City Information</div>
                <div className='city-info'>
                    <div>
                        <h1>{city}</h1>
                    </div>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
                </div>
                <div className='city-stats'>
                    <div>
                        <p>Temperature</p>
                        <h5>{temp}</h5>
                    </div>
                    <div>                        
                        <p>Lowest Temp</p>
                        <h5>{tempMin}</h5>
                    </div>
                    <div>
                        <p>Highest Temp</p>
                        <h5>{tempMax}</h5>                        
                    </div>
                    <div>
                        <p>Pressure</p>
                        <h5>{pressure}</h5>
                    </div>
                    <div>
                        <p> Wind Speed</p>
                        <h5>{speed}</h5>                        
                    </div>
                    <div>
                        <p>Humidity</p>
                        <h5>{humidity}</h5>                        
                    </div>
                </div>
            </div>
        );
    }
}