import React, { Component } from 'react';



class Navbar extends Component {
 
  
  render(props) {
    return (
      <nav>
       <img src = {this.props.logo} className="logo" alt="write2smile" />
        <div className="aboutLink" onClick ={this.props.showAbout}   > #write2smile </div>
        <div className="corner" />
       </nav>
      
       
    );
  }
}

export default Navbar;
