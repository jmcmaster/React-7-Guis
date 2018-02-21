import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    };    

    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.increaseCounter}>Count</button>
      </div>
    );
  }
}

export default Counter;