import React, { Component } from "react";
import JourneyForm from "../components/JourneyForm";
import Results from "../components/Results";

export default class JourneyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      price: '',
      refund: '',
      delay: '',
      to_loc: '',
    };
  }

  handleToLocChange = event => {
    const toLoc = event.target.value
    this.setState({ to_loc: toLoc })
  }

  journeyResult = props => {
    this.setState({ result: props });
    const price = this.state.price;
    const delay = this.state.delay;
    const arr = this.state.result.serviceAttributesDetails.locations;
    const toLoc = this.state.to_loc
    const locObj = arr.find(l => l.location == toLoc)
    const scheduledTime = locObj.gbtt_pta;
    const actualTime = locObj.actual_ta;
    const timeDiff = actualTime - scheduledTime;
    this.setState({ delay: timeDiff });
    debugger
    if (delay > 30 && delay < 60) {
      let refund = price /2;
      this.setState({ refund: refund });
    } else if (delay > 60) {
      let refund = price;
      this.setState({ refund: refund });
    } else {
      let refund = "This journey does not qualify for a refund";
      this.setState({ refund: refund });
    }
  };

  calculateRefund = event => {
    this.setState({ price: event.target.value });
  };

  render() {
    return (
      <div className="JourneyContainer">
        <JourneyForm
          toLoc={this.state.to_loc}
          journeyResult={this.journeyResult}
          calculateRefund={this.calculateRefund}
          handleToLocChange={this.handleToLocChange}
        />
      </div>
    );
  }
}
