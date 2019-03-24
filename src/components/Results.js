import React, { Component } from "react";
import JourneyContainer from '../components/JourneyContainer';
import JourneyForm from '../components/JourneyForm';


export default class Results extends Component {

  render() {
    return (
      <div className="Results">
      <h1>Journey Result</h1>
      <p>Your journey was delayed by {this.props.delay} minutes.</p>
      <p>Based on the cost of your ticket you are due a refund of £{this.props.refund}</p>
      </div>
    );
  }
}
