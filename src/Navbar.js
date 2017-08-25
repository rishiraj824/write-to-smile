import React, { Component } from 'react';
import './index.css';


class Navbar extends Component {
  render() {
    return (
      <nav>
       <img src = "logo.png"  className="logo" />
      
        <div className="aboutLink"> #write2smile </div>
        <div className="corner" />
       </nav>
      
       
    );
  }
}

export default Navbar;
