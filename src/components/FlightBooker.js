import React, { Component } from 'react';

// The task is to build a frame containing:
//  - combobox C with the two options “one-way flight” and “return flight”, 
//  - two textfields T1 and T2 representing the start and return date, respectively, 
//  - button B for “submitting” the selected flight. 
//
// 1. T2 is enabled if C's value is “return flight”. 
// 2. When C has the value “return flight” and T2's date is strictly before T1's then B is disabled. 
// 3. When a non-disabled textfield T has an ill-formatted date then T is colored red and B is disabled. 
// 4. When clicking B a message is displayed informing the user of his selection (e.g. “You have booked a 
//    one-way flight on 04.04.2014.”). 
//
// Initially, C has the value “one-way flight” and T1 as well as T2 have the same (arbitrary) date (it is implied that T2 is disabled).

class FlightBooker extends Component {
  constructor(props) {
    super(props)
    
    this.state = {      
      comboBox: 'one-way-flight',
      departDate: '12-25-2018',  
      departDateValid: true,
      returnDate: '12-25-2018',
      returnDateValid: true
    }

    this.handleComboBoxChange = this.handleComboBoxChange.bind(this)
    this.handleDepartDateChange = this.handleDepartDateChange.bind(this)
    this.handleReturnDateChange = this.handleReturnDateChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  validateDate(string) {
    const re = /^((0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])-[12]\d{3})$/;    
    return string.match(re) === null ? false : true;
  }

  handleComboBoxChange(e) {
    this.setState({
      comboBox: e.target.value
    });
  }

  handleDepartDateChange(e) {          
    this.setState({
      departDate: e.target.value,
      departDateValid: this.validateDate(e.target.value)
    });
  }

  handleReturnDateChange(e) {    
    this.setState({
      returnDate: e.target.value,
      returnDateValid: this.validateDate(e.target.value)
    });
  }

  handleButtonClick(e) {
    e.preventDefault()
    
    let message = '';

    switch(this.state.comboBox) {
      case 'one-way-flight':
        message = `You have booked a one-way flight on ${this.state.departDate}`;
        break;
      case 'round-trip-flight':
        message = `You have booked a round trip flight that departs on ${this.state.departDate} and returns on ${this.state.returnDate}`;
        break;
    }

    alert(message)
  }

  render() {
    const disableReturnField = this.state.comboBox !== 'round-trip-flight';        
    const isEnabled = this.state.departDateValid 
      && (disableReturnField ? true : this.state.returnDateValid)
      && this.state.returnDate >= this.state.departDate 

    return (
      <form>

        <label>Flight Type: </label>
        <select 
          name="flight-type"
          value={this.state.comboBox} 
          onChange={this.handleComboBoxChange}>
            <option value="one-way-flight">one-way flight</option>
            <option value="round-trip-flight">round trip flight</option>
        </select>
        
        <br />
        
        <label>Depart Date: </label>
        <input 
          name="depart-date"
          type="text" 
          value={this.state.departDate}
          placeholder="MM-DD-YYYY"           
          onChange={this.handleDepartDateChange} 
          style={{backgroundColor: !this.state.departDateValid ? 'red' : 'white'}}
        />
          
        <br />
        
        <label>Return Date: </label>
        <input 
          name="return-date"
          type="text" 
          value={this.state.returnDate}
          placeholder="MM-DD-YYYY"           
          onChange={this.handleReturnDateChange} 
          style={{backgroundColor: !disableReturnField && !this.state.returnDateValid ? 'red' : 'white'}}
          disabled={disableReturnField} 
        />
          
        <br />
        
        <button 
          disabled={!isEnabled}
          onClick={this.handleButtonClick}>Book</button>

      </form>
    );
  }
}

export default FlightBooker;