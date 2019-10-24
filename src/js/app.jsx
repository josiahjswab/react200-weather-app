import React from 'react';
import Header from './header/Header';
import Search from './search';
import City from './city';
import History from './history';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <Search/>
          <div id='column-wrapper'>
            <City/>
            <History/>
          </div>
      </div>
    );
  }
}
