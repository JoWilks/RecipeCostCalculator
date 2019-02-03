import React, { Component } from 'react';
import Navbar from './Navbar'
import Container from './Container'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <div className="AppContainer">
            <Container />
          </div>
      </div>
    );
  }
}

export default App;
