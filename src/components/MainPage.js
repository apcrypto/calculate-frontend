import React, { Component } from "react";
import JourneyContainer from '../components/JourneyContainer';
import Register from '../components/Register.js'
import Login from '../components/Login.js'


export default class MainPage extends Component {

  render() {
    return (
      <div className="MainPage">
      <JourneyContainer
      stations={this.props.stations}
      handleOriginSearch={this.props.handleOriginSearch}
      handleDestinationSearch={this.props.handleDestinationSearch}
      originStation={this.props.originStationFilter}
      />
      <Register />
      <Login />
      </div>
    );
  }

}
