
import React, { Component } from 'react';
import './index.css';
import Content from './Components/Content';
import Navbar from './Components/Navbar';

import BubbleMenu from './Components/BubbleMenu';


 
  

class App extends Component {

 
   
  constructor(props){
    super(props);
    this.state = {screen: 1 };
    this.showAbout = this.showAbout.bind(this);
  }

   showAbout(){
    this.setState({screen: 2});
  }

  render() {


    const screen = this.state.screen
    if(screen===1 ){
      return (
    <div className="container" id="container" > 
    <div className="navbar" >
      <Navbar showAbout={this.showAbout} / >
    </div> 

    <div className="content" >
      <Content/> 
    </div>
    
    <div className="bubblemenu" >
      <BubbleMenu/> 
    </div>
    </div> 
    );

    }else{
      return (
    <div className="container" id="container" > 
    <div className="navbar" >
      <Navbar showAbout={this.showAbout} / >
    </div> 

    <div className="content" >
      <h1>About us</h1> 
      <h3>Lorem ipsum</h3>
    </div>
    <div className="bubblemenu" >
      <BubbleMenu/> 
    </div>
    </div> 
    );
    }
    
  }
}

export default App;
