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

  notRegistered = () => {
    return (
      <>
      <p className="not_registered">Please register to login</p>
      </>
    )
  }

  registered = () => {
    return (
      <>
      <p className="registered">You're now registered and can login</p>
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


        <input
          className="user_email"
          name="email"
          type="text"
          onChange={this.props.handleChange}
          placeholder="Enter username"
          style={{ width: 225 }}
        />

        <input
          className="password_input"
          name="password"
          type="password"
          onChange={this.props.handleChange}
          placeholder="Enter password"
          style={{ width: 225 }}
        />

        {
          this.props.localStorage == true
          ? this.loggedOut()
          : this.loggedIn()
        }

        <button className="register_button" onClick={this.props.handleRegister}>
          Register
        </button>

        {
          this.props.registered == true
          ? this.registered()
          : this.notRegistered()
        }

      </div>


    );
  }
}
