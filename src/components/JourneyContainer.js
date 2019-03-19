import React, { Component } from "react";
import JourneyForm from '../components/JourneyForm';
import Results from '../components/Results';

export default class JourneyContainer extends Component {

  render() {
    return (
      <div className="JourneyContainer">
      <JourneyForm
      stations={this.props.stations}
      handleFormSubmit={this.props.handleFormSubmit}
      />
      <Results />

      </div>
    );
  }

}
