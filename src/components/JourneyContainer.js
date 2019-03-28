import React, { Component } from "react";
import JourneyForm from "../components/JourneyForm";
import Results from "../components/Results";
import "../assets/journey-container.css";

export default class JourneyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      price: "",
      refund: "",
      delay: "",
      to_loc: "",
      calculated: false,
      error: "",
    };
  }

  newJourney = () => {
    this.setState({
      calculated: false
    })
  }

  journeyError = () => {
    debugger
  }

  handleToLocChange = event => {
    const toLoc = event.target.value;
    this.setState({ to_loc: toLoc });
  };

  journeyResult = props => {
    const error = props.status
    this.setState({ error: error, result: props, calculated: true });
    if(error === 500) { return }
    let price = this.state.price;
    let arr = this.state.result.serviceAttributesDetails.locations;
    let toLoc = this.state.to_loc;
    let locObj = arr.find(l => l.location == toLoc);
    let scheduledTime = locObj.gbtt_pta;
    let actualTime = locObj.actual_ta;
    let timeDiff = actualTime - scheduledTime;
    let refund = this.state.refund
    let date_of_service = "2019-03-14"
    let arrival_loc = toLoc

    this.setState({ delay: timeDiff });
    const delay = this.state.delay;
    if (delay > 30 && delay < 60) {
      let refund = price / 2;
      this.setState({ refund: refund });
    } else if (delay > 60) {
      let refund = price;
      this.setState({ refund: refund });
    } else {
      let refund = 0;
      this.setState({ refund: refund });
    }

    return fetch("http://localhost:3000/api/v1/journeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },
      body: JSON.stringify({ arrival_loc, date_of_service, price, refund, delay})
    }).then(response => response.json(console.log(response)))

  };

  calculateRefund = event => {
    this.setState({ price: event.target.value });
  };

  render() {
    const error = this.state.result.status;
    const calculated = this.state.calculated;
    if (calculated) {
      return (
        <div>
          <Results
            refund={this.state.refund}
            delay={this.state.delay}
            calculated={this.state.calculated}
            newJourney={this.newJourney}
            error={ error}
            />
        </div>
      );
    } else {
      return (
        <div>
          <JourneyForm
            result={this.state.result}
            refund={this.state.refund}
            delay={this.state.delay}
            toLoc={this.state.to_loc}
            calculated={this.state.calculated}
            journeyResult={this.journeyResult}
            calculateRefund={this.calculateRefund}
            handleToLocChange={this.handleToLocChange}
            calculated={this.state.calculated}
          />
        </div>
      );
    }
  }
}
