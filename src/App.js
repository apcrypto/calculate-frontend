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

  handleFormSubmit = (event) => {
    debugger
      event.preventDefault();
      //put fetch here
  }


  render() {
    return (
      <div className="App">
      <Navigation />
      <MainPage
      handleFormSubmit={this.handleFormSubmit}
      />
      </div>
    );
  }
}
