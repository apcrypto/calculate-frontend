import React, { Component } from "react";
import JourneyContainer from '../components/JourneyContainer';
import Register from '../components/Register'
import Journeys from '../components/Journeys'
import API from "../API";
import "../assets/mainpage.css";


export default class MainPage extends Component {

  render() {
    return (
      <div className="mainpage">
      <h1 className="mainpage_text">See how much compensation you can claim for late and disrupted train services</h1>
      <p className="body_text">The amount you can claim depends on which train company you travelled with - check your ticket if you’re not sure.<p></p>

      <p>If your train company offers ‘Delay Repay’
      You can get compensation if your train company is part of a scheme called ‘Delay Repay’ - it doesn’t matter why your train was delayed.</p>

      <p>Check your train company’s website to find out if they offer Delay Repay (they might call it 'delay compensation'.</p>


      <p>You’re legally entitled to compensation of:</p>


      50% of your ticket price if you get to your destination between 30 minutes and an hour late
      a full refund if you arrive more than 1 hour late.</p>
      <JourneyContainer />
      <Register />
      <Journeys />
      </div>
    );
  }

}
