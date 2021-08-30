// create your App component here

import React, {Component} from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      
    }
  }

  componentDidMount() {
    const url = 'http://api.open-notify.org/astros.json'
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState = json)
  }

  render() {
    <div>{this.state}</div>
  }

}

export default App;