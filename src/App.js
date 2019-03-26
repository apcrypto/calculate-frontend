import React, { Component } from 'react';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import SignInForm from './components/SignInForm';
import station from './assets/station.jpg'
import API from "./API";
import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      username: {},
    };
  }


  render() {
    return (
      <div className="app">
      <div className="layer">
      <Navigation />
      <MainPage />
      </div>
      </div>
    );
  }
}
