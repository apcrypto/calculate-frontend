import React, { Component } from "react";
import { TimePicker } from "antd";
import moment from "moment";
import { Input } from "antd";
import { DatePicker } from "antd";
import { Button } from "antd";

const Search = Input.Search;

export default class JourneyForm extends Component {

  render(props) {
    const format = "HH:mm";
    const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

    function onChange(date, dateString) {
      console.log(date, dateString);
    }

    let stations = this.props.stations;
    let optionItems = stations.map((station) =>
            <option key={station.TLC}>{station.Station}</option>
        );

    return (
      <div className="JourneyForm">
        <h1>Enter your journey details</h1>

        <select>
        {optionItems}
        </select>

        <p>From</p>
        <Search
          type="search"
          placeholder="Enter origin station"
          onSearch={event => this.props.handleOriginSearch(event)}
          style={{ width: 200 }}
        />

        <p>To</p>
        <Search
          placeholder="Enter destination station"
          onSearch={event => this.props.handleDestinationSearch(event)}
          style={{ width: 200 }}
        />

        <p>Scheduled Depature Time</p>
        <TimePicker
          defaultValue={moment("00:00", format)}
          format={format}
          style={{ width: 200 }}
        />

        <p>Date</p>
        <DatePicker onChange={onChange} style={{ width: 200 }} />

        <p>Ticket Price</p>
        <Input placeholder="Enter cost of ticket" style={{ width: 200 }} />

        <p />
        <Button style={{ width: 200 }} type="primary">
          Calculate refund >
        </Button>
      </div>
    );
  }
}
