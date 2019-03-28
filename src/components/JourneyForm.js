import React, { Component } from "react";
import Results from "../components/Results";
import { STATION_DATA } from "../components/StationData";
import "../assets/journey-form.css";
import { TimePicker } from 'antd';
import { DatePicker } from 'antd';
import { Input } from 'antd';
import moment from 'moment';
const format = 'HH:mm';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;




export default class JourneyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from_loc: "",
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

  handleFromTimeChange = (time, timeString) => {
    let fromTime = timeString
    const newTime = fromTime.replace(":", "");
    this.setState({ from_time: newTime });
  };

  handleToTimeChange = (time, timeString)  => {
    const toTime = timeString
    const newTime = toTime.replace(":", "");
    this.setState({ to_time: newTime });
  };

  handleFromDateChange = (date, dateString) => {
    const newDate = new Date(dateString);
    const day = newDate.getDay();
    if (day === 0) {
      this.setState({ days: "SUNDAY" });
    } else if (day === 6) {
      this.setState({ days: "SATURDAY" });
    } else {
      this.setState({ days: "WEEKDAY" });
    }
    this.setState({ from_date: dateString });
  };

  handleToDateChange = (date, dateString) => {
    const newDate = new Date(dateString);
    const day = newDate.getDay();
    if (day === 0) {
      this.setState({ days: "SUNDAY" });
    } else if (day === 6) {
      this.setState({ days: "SATURDAY" });
    } else {
      this.setState({ days: "WEEKDAY" });
    }
    this.setState({ to_date: dateString });
  };

  createJourney = event => {
    event.preventDefault();
    const {
      from_loc,
      from_time,
      to_time,
      from_date,
      to_date,
      days
    } = this.state;

    const to_loc = this.props.toLoc;

    const formData = {
      journey: {
        from_loc: from_loc,
        to_loc: to_loc,
        from_time: from_time,
        to_time: to_time,
        from_date: from_date,
        to_date: to_date,
        days: days
      }
    };

    fetch("http://localhost:3000/api/v1/journey_info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json(console.log(resp.status)))
      .then(this.props.journeyResult)
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
          <h1 className="form-header">Enter your journey details</h1>

          <p className="from_text">From</p>
          <select
            className="from_dropdown_text"
            name="from_loc"
            onChange={this.handleChange}
          >
            {optionItems}
          </select>

          <p className="to_text">To</p>
          <select
            className="to_dropdown_text"
            name="to_loc"
            onChange={this.props.handleToLocChange}
          >
            {optionItems}
          </select>

          <p className="from_time_text">From Time</p>
          <TimePicker
            defaultValue={moment('00:00', format)}
            format={format}
            id="from_input"
            className="from_time_input"
            type="time"
            onChange={this.handleFromTimeChange}
            name="from_time"
            style={{ width: 225 }}
          />

          <p className="to_time_text">To Time</p>
          <TimePicker
            defaultValue={moment('00:00', format)}
            format={format}
            className="to_time_input"
            type="time"
            onChange={this.handleToTimeChange}
            name="to_time"
            style={{ width: 225 }}
          />

          <p className="from_date_text">From Date</p>
          <DatePicker
            className="from_date_input"
            type="date"
            onChange={this.handleFromDateChange}
            name="from_date"
            style={{ width: 225 }}
            data-date-format="yyyy-mm-dd"
          />

          <p className="to_date_text">To Date</p>
          <DatePicker
            className="to_date_input"
            type="date"
            onChange={this.handleToDateChange}
            name="to_date"
            style={{ width: 225 }}
            data-date-format="yyyy-mm-dd"
          />

          <p className="price_text">Ticket Price in £</p>
          <Input
            className="price_input_text"
            name="price"
            type="number"
            onChange={this.props.calculateRefund}
            placeholder="Enter cost of ticket"
            style={{ width: 225 }}
          />
          <p />
          <button
            className="calculate_button"
            type="button"
            onClick={this.createJourney}
            style={{ width: 225 }}
          >
            Calculate refund
          </button>
        </div>
      </form>
    );
  }
}
