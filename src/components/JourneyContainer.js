import React, { Component } from "react";
import JourneyForm from "../components/JourneyForm";
import Results from "../components/Results";

export default class JourneyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      price: "",
      refund: "",
      delay: ""
    };
  }

  journeyResult = props => {
    this.setState({ result: props });
    let arr = this.state.result.serviceAttributesDetails.locations;
    var lastInArray = arr[arr.length - 1];
    const scheduledTime = lastInArray.gbtt_pta;
    const actualTime = lastInArray.actual_ta;
    const timeDiff = actualTime - scheduledTime;
    this.setState({ delay: timeDiff });
  };

  calculateRefund = event => {
    this.setState({ price: event.target.value });
    const price = this.state.price;
    const delay = this.state.delay;

    if (delay > 30 < 60) {
      const refund = price /2;
      this.setState({ refund: refund });
    } else if (delay > 60) {
      const refund = price;
      this.setState({ refund: refund });
    } else {
      const refund = "This journey does not qualify for a refund";
      this.setState({ refund: refund });
    }
  };

  render() {
    return (
      <div className="JourneyContainer">
        <JourneyForm
          journeyResult={this.journeyResult}
          calculateRefund={this.calculateRefund}
        />
        <Results />
      </div>
    );
  }
}
