import React, { Component } from "react";
import { Button } from "antd";

export default class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <h1>CalcuLate</h1>
        <a href="https://www.citizensadvice.org.uk/consumer/holiday-cancellations-and-compensation/getting-a-refund-for-a-cancelled-or-delayed-train/">
          Help
        </a>
        <a href="">Register</a>
        <Button style={{ width: 100 }} type="primary">
          Sign in
        </Button>
      </div>
    );
  }
}
