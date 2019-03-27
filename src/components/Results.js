import React, { Component } from "react";
import JourneyContainer from "../components/JourneyContainer";
import JourneyForm from "../components/JourneyForm";
import "../assets/results.css";

export default class Results extends Component {

  error = () => {
    return (
      <>
        <p className="error_text">Your journey does not exist or you may have entered incorrect details.<br></br><br></br> Please try another route or enter your details again.</p>
      </>
    )
  }

  result = () => {
    return (
      <>
        <h1 className="title_text">Journey Result</h1>
        <p className="text">
          There was a {this.props.delay} minute delay to the arrival of your train.
        </p>
        <p className="text">You could claim a refund of £{this.props.refund}</p>
      </>
    )
  }

  render() {
    return (
      <div className="results">
        {
          this.props.error == 500
          ? this.error()
          : this.result()
        }
        <button
          className="next_journey_button"
          type="button"
          onClick={this.props.newJourney}
          style={{ width: 200 }}
        >
          Enter another journey
        </button>
      </div>
    );
  }
}
