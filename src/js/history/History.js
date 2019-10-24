import React from 'react';

export default class History extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        const { history } = this.props;

        return(
            <div id='history'>
                <div className='header'>Search History</div>
                <div className='table'>
                    <ul>
                        { history.map(search => (
                            <li key={search.time}>
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