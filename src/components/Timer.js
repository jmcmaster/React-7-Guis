import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      initialDate: new Date(),
      elapsedTime: 0,
      duration: 22
    };
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
  } 
  
  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer() {
    clearInterval(this.timerID);
    this.timerID = null;
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.tick(),
      10
    );
  }

  tick() {
    if (this.state.elapsedTime.toFixed(1) <= parseFloat(this.state.duration)) {
      this.setState({
        date: new Date(),
        elapsedTime: (this.state.date.getTime() - this.state.initialDate.getTime()) / 1000
      });
    } else {
      this.clearTimer();
    }
  }

  handleResetButtonClick(e) {
    this.setState({
      date: new Date(),
      initialDate: new Date(),
      elapsedTime: 0
    });
    
    if (!this.timerID) {
      this.startTimer();
    }
  }

  handleDurationChange(e) {
    this.setState({
      duration: e.target.value
    });

    if (this.state.elapsedTime.toFixed(1) < parseFloat(this.state.duration)) {
      this.startTimer()
    }
  }

  render() {    
    const { elapsedTime, duration } = this.state
    const progressBarWidth = Math.min((elapsedTime / duration) * 100, 100);    

    return (
      <div>
        <div>
          <label>Elapsed Time: </label>
          <div style={{maxWidth: 200 + 'px', backgroundColor: 'lightgray'}}>
            <div style={{backgroundColor: 'cyan', height: 20 + 'px', width: progressBarWidth + '%'}}></div>            
          </div>
        </div>
        <h3>{elapsedTime.toFixed(1)}s</h3>
        <div>
          <label>Duration: </label>
          <input 
            type="range" 
            value={this.state.duration} 
            min="15" 
            max="30"
            onChange={this.handleDurationChange} 
          />
        </div>
        <button onClick={this.handleResetButtonClick}>Reset</button>
      </div>
    )
  }
}

export default Timer;