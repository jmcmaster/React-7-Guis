import React, { Component } from 'react';

import Guid from './Utils';

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          key: Guid.generate(),
          firstName: 'Hans',
          lastName: 'Emil'
        },
        {
          key: Guid.generate(),
          firstName: 'Max',
          lastName: 'Mustermann'
        },
        {
          key: Guid.generate(),
          firstName: 'Roman',
          lastName: 'Tisch'
        },
        {
          key: Guid.generate(),
          firstName: 'John',
          lastName: 'Romba'
        }
      ],
      tmpPerson: {}
    }
    this.handlePersonClick = this.handlePersonClick.bind(this)
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
    this.handleCreateButtonClick = this.handleCreateButtonClick.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.onChangeLastNameInput = this.onChangeLastNameInput.bind(this)
  }

  tmpPersonHasKey() {
    return this.state.tmpPerson.hasOwnProperty('key')
  }

  handlePersonClick(e) {
    let tmpPerson;
    if (this.tmpPersonHasKey() && e.target.id === this.state.tmpPerson.key) {
      tmpPerson = {}
    } else {
      const person = this.state.people.filter((person) => person.key === e.target.id)        
      const index = this.state.people.indexOf(person[0] || {});    
      tmpPerson = this.state.people[index] || {}
    } 
    this.setState({
      tmpPerson: tmpPerson
    })
  }

  handleDeleteButtonClick(e) {
    const person = this.state.people.filter((person) => person === this.state.tmpPerson)        
    const index = this.state.people.indexOf(person[0] || {});    
    let tmpPeople = this.state.people;
    tmpPeople.splice(index, 1);
    this.setState({
      people: tmpPeople,
      tmpPerson: {}
    })
  }

  handleCreateButtonClick(e) {
    let tmpPeople = this.state.people;
    let tmpPerson = this.state.tmpPerson;
    tmpPerson.key = Guid.generate();
    tmpPeople.push(this.state.tmpPerson)
    this.setState({
      people: tmpPeople,
      tmpPerson: {}
    })
  }

  handleFirstNameChange(value) {
    let tmpPerson = this.state.tmpPerson;
    tmpPerson.firstName = value;
    this.setState({
      tmpPerson: tmpPerson
    })
  }

  onChangeLastNameInput(value) {
    let tmpPerson = this.state.tmpPerson;
    tmpPerson.lastName = value;
    this.setState({
      tmpPerson: tmpPerson
    })
  }

  render() {
    const isNewPerson = this.state.tmpPerson !== {} && !this.tmpPersonHasKey()

    return (
      <div>
        <label>First Name: </label>
        <input 
          type="text" 
          value={this.state.tmpPerson.firstName || ''} 
          onChange={e => this.handleFirstNameChange(e.target.value)}
        />
        <br />
        <label>Last Name: </label>
        <input 
          type="text" 
          value={this.state.tmpPerson.lastName || ''} 
          onChange={e => this.onChangeLastNameInput(e.target.value)}
        />
        <ul>        
          {this.state.people.map(
            (person) => 
              <li 
                id={person.key} 
                key={person.key}
                onClick={this.handlePersonClick}>
                {person.firstName} {person.lastName}
              </li>
          )}
        </ul>        
        <button 
          onClick={this.handleCreateButtonClick}
          disabled={!isNewPerson}>Create</button>
        <button disabled={isNewPerson}>Update</button>
        <button 
          onClick={this.handleDeleteButtonClick}
          disabled={isNewPerson}>Delete</button>
      </div>
    );
  }
}

export default Crud;