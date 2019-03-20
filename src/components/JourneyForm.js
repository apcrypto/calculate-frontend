import React, { Component } from "react";
import { STATION_DATA } from "../components/StationData";
const API = "https://hsp-prod.rockshore.net/api/v1/serviceMetrics";

export default class JourneyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from_loc: "",
      to_loc: "",
      from_time: "",
      to_time: "",
      from_date: "",
      to_date: "",
      day: "",
      price: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleTimeChange = event => {
    const time = event.target.value
    const newTime = time.replace(":","")
    this.setState({ from_time: newTime })
  }

  handleDateChange = event => {
    const date = new Date(event.target.value);
    const day = date.getDay();
    if (day < 6) {
      this.setState({ day: "WEEKDAY" });
    } else {
      this.setState({ day: "WEEKEND" });
    }
    this.setState({ from_date: event.target.value })
  };

  createJourney = event => {
    event.preventDefault();
    const from_loc = this.state.from_loc;
    const to_loc = this.state.to_loc;
    const from_time = this.state.from_time;
    const to_time = this.state.to_time;
    const from_date = this.state.from_date;
    const to_date = this.state.to_date;
    const days = this.state.day;
    const formData = {
      from_loc,
      to_loc,
      from_time,
      to_time,
      from_date,
      to_date,
      days
    };
  };

  journeyPostOne = formData => {
    fetch("https://hsp-prod.rockshore.net/api/v1/serviceMetrics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      Authorization: "Basic YW5keXB1cmJyaWNrQGdtYWlsLmNvbTpSZWdnYWUxOTc4Kg==",
      body: JSON.stringify(formData)
    }).then(resp => resp.json());
  };

  render(props) {
    const stations = STATION_DATA;
    const optionItems = stations.map(station => (
      <option value={station.TLC} key={station.TLC}>
        {station.Station}
      </option>
    ));

    return (
      <form className="journey-form">
        <div>
          <h1>Enter your journey details</h1>

          <p>From</p>
          <select
            name="from_loc"
            onChange={this.handleChange}
            style={{ width: 200 }}
          >
            {optionItems}
          </select>

          <p>To</p>
          <select
            name="to_loc"
            onChange={this.handleChange}
            style={{ width: 200 }}
          >
            {optionItems}
          </select>

          <p>Scheduled Depature Time</p>
          <input
            type="time"
            onChange={this.handleTimeChange}
            name="from_time"
            style={{ width: 200 }}
          />

          <p>Date</p>
          <input
            type="date"
            onChange={this.handleDateChange}
            name="from_date"
            style={{ width: 200 }}
            data-date-format="yyyy-mm-dd"
          />

          <p>Ticket Price</p>
          <input
            name="to_date"
            type="number"
            onChange={this.handleChange}
            placeholder="Enter cost of ticket"
            style={{ width: 200 }}
          />
          <button
            onClick={e => this.props.createJourney(this.state, e)}
            style={{ width: 200 }}
          >
            Calculate refund
          </button>
        </div>
      </form>
    );
  }
}
