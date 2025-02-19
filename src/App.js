import React, { Component } from 'react';
import './index.css';
import Content from './Components/Content';
import Navbar from './Components/Navbar';
import FormComponent from './Components/FormComponent'
import BubbleMenu from './Components/BubbleMenu';
import Cat from './Components/Cat';
import Animate from 'react-simple-animate';



 
  

class App extends Component {

 
   
  constructor(props){
    super(props);
    this.state = {screen: 1 , category : -1, bgcolor: { startColor: "white", endColor: "white" }, aboutLinkColor: "black" , logo : "logo-black.png" };
    this.showAbout = this.showAbout.bind(this);
    this.showForm = this.showForm.bind(this);
    this.showHome= this.showHome.bind(this);
      this.showAck= this.showAck.bind(this);

  }

  showForm(category, shade){
    this.setState({screen: 3});
    this.setState({category: category});
    this.setState({bgcolor: shade});
    this.setState({aboutLinkColor: "white"});
    this.setState({logo : "logo-white.png"});
  }

   showAbout(){
    this.setState({screen: 2});
    this.setState({logo : "logo-black.png"});
    this.setState({bgcolor: { startColor: "white", endColor: "white" }})
  }

 

    showHome(){
      window.location.reload();
  }

    showAck(){
    this.setState({screen: 4});
    this.setState({bgcolor: { startColor: "white", endColor: "white" }})
    console.log("ACL");
    this.setState({logo : "logo-black.png"});
  }

  render() {
   var gradient = "linear-gradient(141deg, " + this.state.bgcolor.endColor + " 0%, "+this.state.bgcolor.startColor+" 75%)"
   var bgstyle ={
     backgroundColor :this.state.bgcolor.endColor
   }

    const screen = this.state.screen
    if(screen===1 ){
      return (
    <div className="container" id="container" style={bgstyle} > 
    <div className="navbar" >
      <Navbar showAbout={this.showAbout} logo={this.state.logo} />
    </div> 
    
    <div className="content" >
      {/*<Content/> */}
      <h1>Drag and Pop.</h1>
      <h3>Choose the bubble which is bothering you right now.<br/>Trust us, we can help.</h3>
    </div>
    
    <div className="bubblemenu" >
      <BubbleMenu showForm ={this.showForm}/> 
    </div>
    </div> 
    );

    }else if(screen===2){
      return (
    <div className="container" id="container"  style={bgstyle}> 
    <div className="navbar" >
      <Navbar showAbout={this.showAbout} logo={this.state.logo} / >
    </div> 

    <div className="content" >
      <h1>write2smile</h1> 
      <h3>Write2Smile exists to fight depression and stand by those who feel vulnerable. Introducing the concept of anonymous interactions & lay counseling, we aim to redefine the awareness regarding mental health wellness. Yes, we are listening, talk with us anytime, from anywhere and let the best answers reach you through experts.</h3>
      <h3>Feel free to contact us at hello@write2smile.org </h3>
      
      <button onClick={this.showHome} className= "outlineButtonBlue"> Go Back </button>
    </div>
    <div className="bubblemenu">
      <BubbleMenu showForm ={this.showForm} /> 
    </div>
    </div> 
    );
    }else if(screen===3){
      return (
    <div className="container" id="container" style={bgstyle}> 
    <div className="navbar" >
      <Navbar showAbout={this.showAbout} logo={this.state.logo} />
    </div> 

    <div className="content" >
      {/*<Content/> */}
      <FormComponent onClick={this.showAck} buttonColor = {this.state.bgcolor}/>
    </div>

     <div className="bubblemenu" >
      <BubbleMenu showForm ={this.showForm}/> 
    </div>
    
    </div> 
    );

    }else if(screen===4){

    return (

    
    <div className="container" id="container" style={bgstyle} > 
    <div className="navbar"  >
      <Navbar showAbout={this.showAbout}   logo={this.state.logo}/>
    </div> 
    <Animate durationSeconds={0.2}
         startAnimation
         delaySeconds={0.5}
         startStyle={{
           opacity: 0,
         }}
         endStyle={{
           opacity: 1,
         }}
       >  
    <div className="content" >
      {/*<Content/> */}
      <h1>Be strong.</h1>
      <h3>Definetely we'll help you out.</h3>
       <button onClick={this.showHome} className= "outlineButtonBlue"> Home </button>
    </div>
        </Animate>
 
      <Cat/> 
  
    </div>
    );
    }
    
  }
}
export default App;