import React, { Component } from "react";
import JourneyContainer from '../components/JourneyContainer';
import Register from '../components/Register'
import Login from '../components/Login'


export default class MainPage extends Component {

  render() {
    return (
      <div className="MainPage">
      <JourneyContainer
      handleFormSubmit={this.props.handleFormSubmit}
      />
      <Register />
      <Login />
      </div>
    );
  }

}
