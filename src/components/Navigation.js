import React, { Component } from "react";
import '../assets/navigation.css';


export default class Navigation extends Component {

  render() {
    return (
      <div className="navigation">
        <h1 className="logo" >CalcuLate</h1>
        <a className="help" href="https://www.citizensadvice.org.uk/consumer/holiday-cancellations-and-compensation/getting-a-refund-for-a-cancelled-or-delayed-train/">
          Help
        </a>
        <a className="register" href="">Register</a>

        <button className="signin_button" >
          Sign in
        </button>

      </div>
    );
  }
}
