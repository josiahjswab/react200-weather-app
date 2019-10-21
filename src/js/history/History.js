import React from 'react';

export default class History extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id='history'>
                <div className='header'>Search History</div>
                <div className='table'>
                    <ul>
                        <li>
                            <p>Warsaw</p>
                            <p>10/21/2019 <br/>12:01:01</p>
                        </li>
                        <li>
                            <p>Bejing</p> 
                            <p>10/21/2019 <br/>12:01:01</p>
                        </li>
                        <li>
                            <p>Paris</p>
                            <p>10/21/2019 <br/>12:01:01</p>
                        </li>
                        <li>
                            <p>Venice</p>
                            <p>10/21/2019 <br/>12:01:01</p>
                        </li>
                        <li>
                            <p>Los Angeles</p> 
                            <p>10/21/2019 <br/>12:01:01</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}