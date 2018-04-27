import React, { Component } from 'react';
import NavShell from './components/NavShell'
import './App.css';
import Routes from './routes';
import DropDown from './components/wee-components/drop-down-menu';

class Mothership extends Component {
  constructor() {
    super()

    this.state = {
      peopleWhoSmellLikeAButt: ['Tiarra', 'Trent', 'Lloyd'],
      probeFodder: 'Trent'
    }
  }
  
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is the header
        </p>
        <DropDown basketOfThings={this.state.peopleWhoSmellLikeAButt}/>
        <Routes />
      </div>
    );
  }
}

export default Mothership;
