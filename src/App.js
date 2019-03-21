import React, { Component } from 'react';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import './App.css';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      user: {},
    };
  }


  render() {
    return (
      <div className="App">
      <Navigation />
      <MainPage
      />
      </div>
    );
  }
}
