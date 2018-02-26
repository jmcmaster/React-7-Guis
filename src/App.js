import React, { Component } from 'react';
import Counter from './components/Counter';
import TemperatureConverter from './components/TemperatureConverter';
import FlightBooker from './components/FlightBooker';
import Timer from './components/Timer';
import Crud from './components/Crud';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>        
        <Counter />
        <hr />        
        <TemperatureConverter />
        <hr />
        <FlightBooker />
        <hr />
        <Timer />
        <hr />
        <Crud />
      </div>
    );
  }
}

export default App;
