import React, { Component } from "react";
import { STATION_DATA } from '../components/StationData';
import { TimePicker } from "antd";
import moment from "moment";
import { Input } from "antd";
import { DatePicker } from "antd";
import { Button } from "antd";
import { Select } from 'antd';
const Search = Input.Search;
const Option = Select.Option;


export default class JourneyForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      from_loc: this.props.from_loc,
      input: this.props.input,
      // to_loc: this.props.,
      // from_time: this.props.,
      // to_time: this.props.,
      // from_date: this.props.,
      // to_date: this.props.,
      // days: this.props.
    }
  }



  render(props) {
    const format = "HH:mm";
    const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

    onDateChange = (date, dateString) => {
      console.log(date, dateString);
    }

    onTimeChange = (time, timeString) => {
      console.log(time, timeString);
    }

    onFromChange = event => {
      event.preventDefault()
      this.setState({
        input: event.target.value
        })
       this.filterFrom()
      }

    filterFrom = (input,option) => {
      return stations.filter( station => station.Station.includes(this.input) )
    }

  }



    return (
      <form className="journey-form">
        <div>
          <h1>Enter your journey details</h1>

          <p>From</p>
          <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a station"
          optionFilterProp="stations"
          onChange={event => this.props.onFromChange(event.target.value)}
          filterOption={(input, option) => option.props.stations.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
          <Option value={optionItems}>{optionItems}</Option>
          </Select>

          <p>To</p>
          <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a station"
          optionFilterProp="station"
          onChange={event => this.props.onToChange(event.target.value)}
          filterOption={(input, option) => option.props.stations.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
          <Option value={optionItems}>{optionItems}</Option>
          </Select>

          <p>Scheduled Depature Time</p>
          <TimePicker
            defaultValue={moment("00:00", format)}
            format={format}
            style={{ width: 200 }}
            onChange={onTimeChange}
          />

          <p>Date</p>
          <DatePicker onChange={onDateChange} style={{ width: 200 }} />

          <p>Ticket Price</p>
          <Input placeholder="Enter cost of ticket" style={{ width: 200 }} />

          <p />
          <Button
            onClick={this.props.handleFormSubmit}
            style={{ width: 200 }}
            type="primary"
          >
            Calculate refund >
          </Button>
        </div>
      </form>
    );
  }
}
