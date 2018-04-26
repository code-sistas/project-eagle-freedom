import React, { Component } from 'react';
import NavShell from './components/NavShell'
import './App.css';
import Routes from './routes'

class Mothership extends Component {
  constructor() {
    super()

    this.state = {
      peopleWhoSmellLikeAButt: ['Tiarra']
    }
  }
  
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is the header
        </p>
        <Routes />
      </div>
    );
  }
}

export default Mothership;
