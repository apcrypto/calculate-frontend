import React, { Component } from "react";
import { Input } from 'antd';
import API from "../API";
import '../assets/navigation.css';

export default class Navigation extends Component {

  loggedIn = () => {
    return (
      <>
      <button className="signin_button" onClick={this.props.handleLogin}>
        Sign in
      </button>
      </>
    )
  }

  loggedOut = () => {
    return (
      <>
      <button className="signin_button" onClick={this.props.handleLogout}>
        Sign out
      </button>
      </>
    )
  }

  render() {

    return (
      <div className="navigation">
        <h1 className="logo" >CalcuLate</h1>
        <a className="help" href="https://www.citizensadvice.org.uk/consumer/holiday-cancellations-and-compensation/getting-a-refund-for-a-cancelled-or-delayed-train/">
          Help
        </a>
        <a className="register" href="">Register</a>

        <input
          className="user_email"
          name="email"
          type="text"
          onChange={this.props.handleChange}
          placeholder="Enter email address"
          style={{ width: 225 }}
        />

        <input
          className="password_input"
          name="password"
          type="text"
          onChange={this.props.handleChange}
          placeholder="Enter password"
          style={{ width: 225 }}
        />

        {
          this.props.localStorage == true
          ? this.loggedOut()
          : this.loggedIn()
        }

      </div>
    );
  }
}
