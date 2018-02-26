import React, { Component } from 'react';

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          key: 0,
          firstName: 'Hans',
          lastName: 'Emil'
        },
        {
          key: 1,
          firstName: 'Max',
          lastName: 'Mustermann'
        },
        {
          key: 2,
          firstName: 'Roman',
          lastName: 'Tisch'
        },
        {
          key: 3,
          firstName: 'John',
          lastName: 'Romba'
        }
      ],
      selectedPerson: {}
    }
    this.handlePersonClick = this.handlePersonClick.bind(this)
  }

  handlePersonClick(e) {
    const selectedPerson = this.state.people.filter((person) => person.key === parseInt(e.target.id, 10))    
    const index = this.state.people.indexOf(selectedPerson[0] || {});    
    this.setState({
      selectedPerson: this.state.people[index] || {}
    })
  }

  render() {    
    return (
      <div>
        <label>First Name: </label>
        <input 
          type="text" 
          value={this.state.selectedPerson.firstName || ''} 
        />
        <br />
        <label>Last Name: </label>
        <input 
          type="text" 
          value={this.state.selectedPerson.lastName || ''} 
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
        <button>Update</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default Crud;