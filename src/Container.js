import React, { Component } from 'react';
import LineContainer from './LineContainer'
import TotalLine from './TotalLine'
import './Container.css';


class Container extends Component {


  render() {
    return (
    <div className="Container">
        <LineContainer />
        <TotalLine />
    </div>
    );
  }
}

export default Container