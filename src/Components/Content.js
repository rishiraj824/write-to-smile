import React, { Component } from 'react';
import Animate from 'react-simple-animate';


class Content extends Component {
  render() {
    return (
    	<Animate durationSeconds={0.2}
         startAnimation
         delaySeconds={1.2}
         startStyle={{
           opacity: 0,
         }}
         endStyle={{
           opacity: 1,
         }}
       >
      <div>
      <h1>Drag and Pop{'\u00A0'}</h1>
      <h3>Choose the bubble which is bothering you right now.</h3>
      <h3>It helps. Trust us.</h3>
      <button className= "outlineButton"> Home </button>
      </div>
      </Animate>
    );
  }
}

export default Content;
