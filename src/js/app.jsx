import React from 'react';
import Header from './header/Header';
import Search from './search/Search';
import City from './city/City';
import History from './history/History';

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
