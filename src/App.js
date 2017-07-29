import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {metrics} from "react-metrics";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const config = {
  vendors: [{
    name: "Google Analytics",
    api: {
      pageView: function (eventName, params) {
        // your page view tracking logic here.
      },
      track: function (eventName, params) {
        // your custom link tracking logic here.
      }
    }
  }],
  pageViewEvent: "pageLoad",
  pageDefaults: () => {
    return {
      siteName: "My Web Site"
    };
  }
}

export default metrics(config)(App);
