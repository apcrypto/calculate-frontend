import React, { Component } from "react";
import JourneyForm from '../components/JourneyForm';
import Results from '../components/Results';

export default class JourneyContainer extends Component {

  render() {
    return (
      <div className="JourneyContainer">
      <JourneyForm
      stations={this.props.stations}
      handleOriginSearch={this.props.handleOriginSearch}
      handleDestinationSearch={this.props.handleDestinationSearch}
      originStation={this.props.originStationFilter}
      />
      <Results />

      </div>
    );
  }

}
