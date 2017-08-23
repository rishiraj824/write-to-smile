import React, { Component } from 'react';
import bubble1 from './svg/bubble1.svg';
import bubble2 from './svg/bubble2.svg';
import bubble3 from './svg/bubble3.svg';
import bubble4 from './svg/bubble4.svg';
import Bubble from './Bubble';
//import './Bubbles.css';
import {TweenMax, Power2, TimelineLite, Linear} from "gsap";


let type1 = {
    x1: 100 , 
    y1: 100 ,
    x2: 0 ,
    y2: 200 ,
    x3: -200 ,
    y3: 100 ,
    x4: 0 ,
    y4: 0
};

let type2 = {
    x4: 50, 
    y4: 50 ,
    x3: 0 ,
    y3: 100 ,
    x2: -50 ,
    y2: 50 ,
    x1: 0 ,
    y1: 0
};


let type3 = {
    x1: 50, 
    y1: 50 ,
    x2: 0 ,
    y2: 100 ,
    x3: -50 ,
    y3: 50 ,
    x4: 0 ,
    y4: 0
};


let type4 = {
     x4: 100 , 
    y4: 100 ,
    x3: 0 ,
    y3: 200 ,
    x2: -200 ,
    y2: 100 ,
    x1: 0 ,
    y1: 0
};


let small ={
  length: "10% "

}

let medium ={
  length: "15%",
}

let large ={
  length: "20%", 
}

class BubbleMenu extends Component {

  componentDidMount() {
  window.onload = function(){
  //dont delete the below comments they have some good paths which can be used later 
  //TweenMax.to("#bubble1", 20, {bezier:[{x:100, y:100}, {x:0, y:200}, {x:-100, y:100}, {x:0, y:0}], ease:Linear.easeNone ,repeat:-1} );
  //TweenMax.to("#bubble2", 10, {bezier:[{x:50, y:50}, {x:0, y:100}, {x:-50, y:50}, {x:0, y:0}], ease:Linear.easeNone ,repeat:-1} );
  //TweenMax.to("#bubble3", 15, {bezier:[{x:100, y:100}, {x:0, y:200}, {x:-100, y:100},{x:0, y:0} ], ease:Linear.easeNone ,repeat:-1} );
  //TweenMax.to("#bubble4", 22, {bezier:[{x:100, y:100}, {x:0, y:200}, {x:-100, y:100}, {x:0, y:0}], ease:Linear.easeNone ,repeat:-1} );

  }


}

  render() {
    return (
      <div className="BubbleMenu">
     <Bubble myID="bubble1" bubbleText ="Hello 1" type={type1} size={small} />
      <Bubble myID="bubble2" bubbleText ="Hello 2"  type={type2}  size={large}/>
       <Bubble myID="bubble3" bubbleText ="Hello 3" type={type4}  size={medium} />
      </div>
    );
  }
}

export default BubbleMenu;
