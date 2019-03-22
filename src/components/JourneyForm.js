import React, { Component } from "react";
import { STATION_DATA } from "../components/StationData";

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
      days: "",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFromTimeChange = event => {
    const time = event.target.value
    const newTime = time.replace(":","")
    this.setState({ from_time: newTime })
  }

  handleToTimeChange = event => {
    const time = event.target.value
    const newTime = time.replace(":","")
    this.setState({ to_time: newTime })
  }

  handleFromDateChange = event => {
    const date = new Date(event.target.value);
    const day = date.getDay();
    if (day === 0) {
      this.setState({ days: "SUNDAY" });
    } else if (day === 6) {
      this.setState({ days: "SATURDAY" });
    } else {
      this.setState({ days: "WEEKDAY" });
    }
    this.setState({ from_date: event.target.value })
  };

  handleToDateChange = event => {
    const date = new Date(event.target.value);
    const day = date.getDay();
    if (day === 0) {
      this.setState({ days: "SUNDAY" });
    } else if (day === 6) {
      this.setState({ days: "SATURDAY" });
    } else {
      this.setState({ days: "WEEKDAY" });
    }
    this.setState({ to_date: event.target.value })
  };

  createJourney = event => {
    event.preventDefault()
    const {
      from_loc,
      to_loc,
      from_time,
      to_time,
      from_date,
      to_date,
      days } = this.state

    const formData = {
      journey: {
        from_loc: from_loc,
        to_loc: to_loc,
        from_time: from_time,
        to_time: to_time,
        from_date: from_date,
        to_date: to_date,
        days: days,
      }
    }

    fetch('http://localhost:3000/api/v1/journey_info', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then( resp => resp.json() )
    .then( this.props.journeyResult )
  }

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

          <p>From Time</p>
          <input
            type="time"
            onChange={this.handleFromTimeChange}
            name="from_time"
            style={{ width: 200 }}
          />

          <p>To Time</p>
          <input
            type="time"
            onChange={this.handleToTimeChange}
            name="to_time"
            style={{ width: 200 }}
          />

          <p>From Date</p>
          <input
            type="date"
            onChange={this.handleFromDateChange}
            name="from_date"
            style={{ width: 200 }}
            data-date-format="yyyy-mm-dd"
          />

          <p>To Date</p>
          <input
            type="date"
            onChange={this.handleToDateChange}
            name="to_date"
            style={{ width: 200 }}
            data-date-format="yyyy-mm-dd"
          />

          <p>Ticket Price</p>
          <input
            name="price"
            type="number"
            onChange={this.props.calculateRefund}
            placeholder="Enter cost of ticket"
            style={{ width: 200 }}
          />
          <p></p>
          <button
            onClick={this.createJourney}
            style={{ width: 200 }}
          >
            Calculate refund
          </button>
        </div>
      </form>
    );
  }
}
