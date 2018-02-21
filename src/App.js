import React, { Component } from 'react';
import Counter from './components/Counter';
import TemperatureConverter from './components/TemperatureConverter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>        
        <Counter />
        <hr />        
        <TemperatureConverter />
      </div>
    );
  }
}

export default App;
