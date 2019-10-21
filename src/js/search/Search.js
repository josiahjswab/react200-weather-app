import React from 'react';
import Tabs from './Tabs';

export default class Search extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id='search'>
                <Tabs/>
                <div>
                    <input id='search-input' type='text'></input>
                    <button id='search-button' type='submit'>Go!</button>
                </div>
            </div>
        );
    }
}