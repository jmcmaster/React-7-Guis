import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
