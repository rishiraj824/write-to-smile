import React, { Component } from 'react';



class Cat extends Component {
 
  
  render(props) {
    return (
      <div className="catContainer"  >
       <img className="cat" src="http://thecatapi.com/api/images/get?format=src&type=gif"  alt="happyCat" />
       
       </div>
      
       
    );
  }
}

export default Cat;
