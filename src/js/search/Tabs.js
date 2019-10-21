import React from 'react';

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='tabs'>
                <button>Warsaw</button>
                <button>Bejing</button>
                <button>Paris</button>
                <button>Venice</button>
                <button>Los Angeles</button>
            </div>
        );
    }
}