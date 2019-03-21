import React, { Component } from "react";
import JourneyContainer from '../components/JourneyContainer';
import Register from '../components/Register'


export default class MainPage extends Component {

  render() {
    return (
      <div className="MainPage">
      <JourneyContainer />
      <Register />
      </div>
    );
  }

}
