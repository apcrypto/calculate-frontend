import React, { Component } from 'react';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
    };
  }


  render() {
    return (
      <div className="App">
      <Navigation />
      <MainPage />
      </div>
    );
  }
}
