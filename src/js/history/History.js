import React from 'react';

export default class History extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        const { history, lat ,lon } = this.props;

        return(
            <div id='history'>
                <div className='header'>Search History</div>
                <div className='table'>
                    <ul>
                        { history.map(search => (
                            <li key={search.time}>
                                <a target='_blank' href={`https://maps.google.com/?q=${search.lat},${search.lon}`}>
                                    <button><i className="fas fa-crosshairs"></i></button>
                                </a>
                                <p> { search.city } </p>
                                <div>
                                    <p> {search.date} </p>
                                    <p> {search.time} </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}