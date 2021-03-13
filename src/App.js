// create your App component here

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super()
    this.state = { peopleInSpace: [] };
  }

  render() {
    return (
      <ul>
        {this.state.peopleInSpace.map(person => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(this.parseJSON)
      .then(data => this.setState({ peopleInSpace: data.people }));
  }

  parseJSON(response) {
    return response.json();
  }
}