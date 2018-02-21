import React, { Component } from 'react';

class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: "",
      fahrenheit: ""
    }
  }

  handleCelsiusChange(value) {
    if (value === "") return this.reset();

    if (this.isNumber(value)) {
      this.setState({
        celsius: value,
        fahrenheit: value * (9/5) + 32
      });
    }
  }

  handleFahrenheitChange(value) {
    if (value === "") return this.reset();

    if (this.isNumber(value)) {
      this.setState({
        celsius:  (value - 32) * (5/9),
        fahrenheit: value
      });
    }
  }

  reset() {
    this.setState({
      celsius: "",
      fahrenheit: ""
    });
  }

  isNumber(value) {
    const re = /^[0-9]+$/;
    return value.match(re);
  }

  handleFocus(e) {
    e.target.select();
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          onChange={e => this.handleCelsiusChange(e.target.value)} 
          onFocus={this.handleFocus}
          value={this.state.celsius}
        />
        <span> Celsius = </span>
        <input 
          type="text" 
          onChange={e => this.handleFahrenheitChange(e.target.value)} 
          onFocus={this.handleFocus}
          value={this.state.fahrenheit}
        />
        <span> Fahrenheit</span>
      </div>
    );
  }
}

export default TemperatureConverter;