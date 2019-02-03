import React, { Component } from 'react';
import './LineItem.css';

class LineItem extends Component {

    render() {
      return (
        <li className="LineItemLi">
            <input type="text" name="name" placeholder="Name"></input>
            <input type="number" name="units" placeholder="Units"></input>
            <input type="number" name="costPerUnit" placeholder="Cost/Unit"></input>
            <input type="number" name="servingsPerUnit" placeholder="Servings/Unit"></input>
        </li>
      );
    }
  }
  
  export default LineItem