import React, { Component } from 'react';
import './App.css';

import Header from './component/Header/Header'
import routes from './routes'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header"/>
        {routes}
      </div>
    );
  }
}

export default App;
