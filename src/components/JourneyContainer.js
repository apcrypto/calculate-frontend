import React, { Component } from "react";
import JourneyForm from '../components/JourneyForm';
import Results from '../components/Results';

export default class JourneyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
  }

  journeyResult = (props) => {
    this.setState({result: props})
    const scheduledTime = this.state.result.serviceAttributesDetails.locations[0].gbtt_pta
    const actualTime = this.state.result.serviceAttributesDetails.locations[2].actual_ta
    const timeDiff = actualTime - scheduledTime
    console.log(timeDiff)

  }


  render() {
    return (
      <div className="JourneyContainer">
      <JourneyForm
      journeyResult={this.journeyResult}
      />
      <Results />

      </div>
    );
  }

}
