import React, { Component } from 'react';
//import './Bubbles.css';
import {TweenMax, Power2, TimelineLite, Linear} from "gsap";




class Bubble extends Component {



  componentDidMount() {

   let type = this.props.type ; 

  console.log(type.x1);
  TweenMax.to('#'+ this.props.myID, 20, {bezier:[{x:type.x1, y:type.y1}, {x:type.x2, y:type.y2}, {x:type.x3, y:type.y3}, {x:type.x4, y:type.y4}], ease:Linear.easeNone ,repeat:-1} );

  //var myText = this.refs.bubbletext;
  //myText.text = this.props.bubbletext ; 
  
}

  render() {
    return (
   
<svg  id = {this.props.myID} width={this.props.size.length} height={this.props.size.length} viewBox="0 0 209 209" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient cy="35.16%" fx="50%" fy="35.16%" r="59.77%" gradientTransform="matrix(0 1 -.99958 0 .85 -.148)" id="a">
      <stop stopColor="#2D2DE4" offset="0%"/>
      <stop stopColor="#8B47D4" offset="64.21%"/>
      <stop stopColor="#FF67C1" offset="100%"/>
    </radialGradient>
    <radialGradient cy="100%" fx="50%" fy="100%" r="84.13%" gradientTransform="matrix(0 -1 1.78743 0 -1.287 1.5)" id="b">
      <stop stopColor="#3981E9" stopOpacity="0" offset="0%"/>
      <stop stopColor="#FFF" offset="100%"/>
    </radialGradient>
    <linearGradient x1="2.91%" y1="0%" x2="109.78%" y2="28.01%" id="c">
      <stop stopColor="#FFF" offset="0%"/>
      <stop stopColor="#3981E9" offset="22.26%"/>
      <stop stopColor="#428AED" offset="72.72%"/>
      <stop stopColor="#FFF" offset="100%"/>
    </linearGradient>
  </defs>
  <g fill="none" fillRule="evenodd">
    <ellipse fill="url(#a)" cx="104.5" cy="104.54" rx="104.5" ry="104.46"/>
    <path d="M105.8 45.6c13.86 0 58.5 8.6 58.5-9.1S138.13 4.44 105.8 4.44c-32.3 0-58.48 14.35-58.48 32.06 0 17.7 44.65 9.1 58.5 9.1z" fillOpacity=".9" fill="url(#b)"/>
    <path d="M30.67 35.75c-5.92 7.22-68.36 95.8 27.6 156.2C123.2 232.8 235.07 167 196.3 66.58c15.1 56.43-23.67 135.84-109.1 114.84-113.05-36.1-56.53-143.72-56.53-145.7z" fillOpacity=".31" fill="url(#c)" style={{mixBlendMode:"lighten"}}/>
    <text fontFamily="Roboto-Light, Roboto" fontSize="24" fontWeight="300" letterSpacing="3" fill="#FFF">
      <tspan textAnchor="middle"   x="50%" y="50%" dominantBaseline="middle">{this.props.bubbleText}</tspan>
    </text>
  </g>
</svg>
    );
  }
}

export default Bubble;
