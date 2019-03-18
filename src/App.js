import React, { Component } from 'react';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import './App.css';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      stations: [],
      originStationFilter: '',
      destinationStationFilter: '',
    };
  }

  componentDidMount() {
    return fetch('http://localhost:3000/stations')
      .then(resp => resp.json())
      .then(stations => this.setState({ stations: stations }));
  }

  handleOriginSearch = event => {
    this.setState({
      originStationFilter: event
    })
  }

  originStationFilter = () => {
    return this.state.stations.filter( station =>
      station.Station.includes(this.state.originStationFilter))
  }

  handleDestinationSearch = event => {
    this.setState({
      destinationStationFilter: event
    })
  }

  destinationStationFilter = () => {
    return this.state.stations.filter( station =>
      station.Station.includes(this.state.destinationStationFilter))
  }




  render() {
    return (
      <div className="App">
      <Navigation />
      <MainPage
      stations={this.state.stations}
      handleOriginSearch={this.handleOriginSearch}
      handleDestinationSearch={this.handleDestinationSearch}
      originStationFilter={this.originStationFilter}
      />
      </div>
    );
  }
}
