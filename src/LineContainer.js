import React, { Component } from 'react';
import LineItem from './LineItem'
import './LineContainer.css';


class Container extends Component {

  render() {
    return (
      <ul className="LineContainer">
        <LineItem />
        <LineItem />
      </ul>
    );
  }
}

export default Container