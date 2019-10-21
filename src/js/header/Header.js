import React from 'react';

export default class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id='header'>
                <h1>🌚 Weather App 🌝</h1>
            </div>
        );
    }
}