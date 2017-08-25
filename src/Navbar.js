import React, { Component } from 'react';
import './index.css';


class Navbar extends Component {
  render() {
    return (
      <nav>
       <img src = "logo.png"  className="logo" />
       <span id="aboutLink" >
       #write2smile
       </span>
       
      </nav>
    );
  }
}

export default Navbar;
