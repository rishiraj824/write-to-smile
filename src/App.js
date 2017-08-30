
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
      <h1>write2smile</h1> 
      <h3>Write2Smile exists to fight depression and stand by those who feel vulnerable. Introducing the concept of anonymous interactions & lay counseling, we aim to redefine the awareness regarding mental health wellness. Yes, we are listening, talk with us anytime, from anywhere and let the best answers reach you through experts.</h3>
      <h3>Feel free to contact us at hello@write2smile.org </h3>
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
