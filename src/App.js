import React, { Component } from 'react';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import SignInForm from './components/SignInForm';
import station from './assets/station.jpg'
import API from "./API";
import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      localStorage: false,
    };
  }

  handleChange = event =>
  this.setState({ [event.target.name]: event.target.value });


  handleLogin = () => {
    const user = this.state;
    API.signin(user).then(data => {
      if (data.error) {
        alert("something is wrong!");
      } else {
        this.signin(data);
      }
    });
  };

  handleLogout = () => {
    this.setState({ localStorage: false });
    this.signout()
  }

  signin = user => {
  localStorage.setItem("token", user.token);
  this.setState({ email: user.email });
  this.setState({localStorage: true })
  };

  signout = () => {
   localStorage.removeItem("token");
   this.setState({ email: "" });
  };

  componentDidMount() {
    API.validate().then(userData => {
      if (userData.error) {
        this.signout();
      } else {
        this.signin(userData);
      }
    });
  }


  render() {
    return (
      <div className="app">
      <div className="layer">
      <Navigation
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      localStorage={this.state.localStorage}
      handleLogin={this.handleLogin}
      handleLogout={this.handleLogout}
      />
      <MainPage />
      </div>
      </div>
    );
  }
}
