import React, { Component } from 'react';
import bubble1 from './svg/bubble1.svg';
import bubble2 from './svg/bubble2.svg';
import bubble3 from './svg/bubble3.svg';
import bubble4 from './svg/bubble4.svg';
import Bubble from './Bubble';
//import './Bubbles.css';
import {TweenMax, Power2, TimelineLite, Linear} from "gsap";




class BubbleMenu extends Component {

  componentDidMount() {
  window.onload = function(){
  //TweenMax.to("#bubble1", 20, {bezier:[{x:100, y:100}, {x:0, y:200}, {x:-100, y:100}, {x:0, y:0}], ease:Linear.easeNone ,repeat:-1} );
  //TweenMax.to("#bubble2", 10, {bezier:[{x:50, y:50}, {x:0, y:100}, {x:-50, y:50}, {x:0, y:0}], ease:Linear.easeNone ,repeat:-1} );
  //TweenMax.to("#bubble3", 15, {bezier:[{x:100, y:100}, {x:0, y:200}, {x:-100, y:100},{x:0, y:0} ], ease:Linear.easeNone ,repeat:-1} );
  //TweenMax.to("#bubble4", 22, {bezier:[{x:100, y:100}, {x:0, y:200}, {x:-100, y:100}, {x:0, y:0}], ease:Linear.easeNone ,repeat:-1} );

  }


}

  render() {
    return (
      <div className="BubbleMenu">
     <Bubble myID="bubble1q" bubbleText ="Hello 1"  />
      </div>
    );
  }
}

export default BubbleMenu;
