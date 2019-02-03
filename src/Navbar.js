import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
    <div className="Navbar">
        <ul className="navbarContainer">
            <li className="logo"><a>LOGO</a></li>
            <li className="title"><a>Recipe Cost Calculator</a></li>
            <li className="button"><a>+</a></li>
        </ul>
    </div>
    );
  }
}

export default Navbar