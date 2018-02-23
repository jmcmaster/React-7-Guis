import React, { Component } from 'react';
import Counter from './components/Counter';
import TemperatureConverter from './components/TemperatureConverter';
import FlightBooker from './components/FlightBooker';
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
      </div>
    );
  }
}

export default App;
