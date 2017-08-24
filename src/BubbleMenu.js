import React, { Component } from 'react';
import bubble1 from './svg/bubble1.svg';
import bubble2 from './svg/bubble2.svg';
import bubble3 from './svg/bubble3.svg';
import bubble4 from './svg/bubble4.svg';
import Bubble from './Bubble';
import './Bubbles.css';
import {TweenMax, Power2, TimelineLite, Elastic, TweenLite,Linear} from "gsap";
import Draggable from "gsap/Draggable";


var bubbleId = ["bubble0", "bubble1", "bubble2", "bubble3", "bubble4"] ; 

let type1 = {
    x1: 100 , 
    y1: 100 ,
    x2: 0 ,
    y2: 200 ,
    x3: -100 ,
    y3: 100 ,
    x4: 0 ,
    y4: 0,
    s:15 
};

let type2 = {
    x1: -100 , 
    y1: -100 ,
    x2: 0 ,
    y2: -200 ,
    x3: 100 ,
    y3: -100 ,
    x4: 0 ,
    y4: 0 ,
    s: 10
};


let type3 = {
    x1: 50 , 
    y1: 50 ,
    x2: 0 ,
    y2: 100 ,
    x3: -50 ,
    y3: 50 ,
    x4: 0 ,
    y4: 0,
    s: 8
};


let type4 = {
    x1: 50 , 
    y1: 50 ,
    x2: 100 ,
    y2: 0 ,
    x3: 50 ,
    y3: -50 ,
    x4: 0 ,
    y4: 0,
    s : 10
};


let type5 = {
    x1: 70 , 
    y1: 70 ,
    x2: 0 ,
    y2: 140 ,
    x3: -70 ,
    y3: 70 ,
    x4: 0 ,
    y4: 0,
    s: 12
};




let small ={
  length: "20%"

}

let medium ={
  length: "28%",
}

let large ={
  length: "35%", 
}

class BubbleMenu extends Component {

  burst(id , bubbleId ) {
 
  for(var i = 0 ; i < bubbleId.length ; i++){

      if( bubbleId[i] == id ){
      TweenLite.to('#'+id, 0.6, { ease: Elastic.easeIn.config(0.9, 0.9) ,scale:0, rotation:0, fillOpacity: 0});
  
      }
      else{
         TweenMax.to('#'+ bubbleId[i], 10, { y:-1000, fillOpacity: 0 });


      }


  } 
   }

  componentDidMount() {
  window.onload = function(){
  //dont delete the below comments they have some good paths which can be used later 
  //TweenMax.to("#bubble1", 20, {bezier:[{x:100, y:100}, {x:0, y:200}, {x:-100, y:100}, {x:0, y:0}], ease:Linear.easeNone ,repeat:-1} );
  //TweenMax.to("#bubble2", 10, {bezier:[{x:50, y:50}, {x:0, y:100}, {x:-50, y:50}, {x:0, y:0}], ease:Linear.easeNone ,repeat:-1} );
  //TweenMax.to("#bubble3", 15, {bezier:[{x:100, y:100}, {x:0, y:200}, {x:-100, y:100},{x:0, y:0} ], ease:Linear.easeNone ,repeat:-1} );
  //TweenMax.to("#bubble4", 22, {bezier:[{x:100, y:100}, {x:0, y:200}, {x:-100, y:100}, {x:0, y:0}], ease:Linear.easeNone ,repeat:-1} );


var bubble1 = Draggable.create("#bubble1" )[0] ;
var bubble2 = Draggable.create("#bubble2" )[0] ;
var bubble3 = Draggable.create("#bubble3" )[0] ;
var bubble4 = Draggable.create("#bubble4" )[0] ;
var bubble0 = Draggable.create("#bubble0" )[0] ;

bubble1.addEventListener("dragend", move("#bubble1" , type1) );
bubble2.addEventListener("dragend", move("#bubble2" , type2) );
bubble3.addEventListener("dragend", move("#bubble3" , type3) );
bubble4.addEventListener("dragend", move("#bubble4" , type4));
bubble0.addEventListener("dragend", move("#bubble0" , type5));

function move(id, typex){
  return function(){
  console.log("xfg");
    var type = typex;
     TweenMax.to(id, type.s, {bezier:[{x:type.x1, y:type.y1}, {x:type.x2, y:type.y2}, {x:type.x3, y:type.y3}, {x:type.x4, y:type.y4}], ease:Linear.easeNone ,repeat:-1} );
  }
}

  }


}

  render() {
    return (
      <div>
     <Bubble onClick={()=>this.burst(bubbleId[0] , bubbleId)} myID={bubbleId[0]} bubbleText ="Legal" type={type1} size={small} />
      <Bubble onClick={()=>this.burst(bubbleId[1], bubbleId)}  myID={bubbleId[1]} bubbleText ="Education"  type={type2}  size={large}/>
       <Bubble  onClick={()=>this.burst(bubbleId[2], bubbleId)}  myID={bubbleId[2]} bubbleText = "Sexual" bubbleText2 = "Orientation" type={type3}  size={large} />
      <Bubble onClick={()=>this.burst(bubbleId[3] , bubbleId)} myID={bubbleId[3]} bubbleText ="Mental" bubbleText2 = "Wellness" type={type4} size={medium} />
    <Bubble onClick={()=>this.burst(bubbleId[4], bubbleId)}  myID={bubbleId[4]} bubbleText ="Relationships"  type={type5}  size={small}/>
      
      </div>
    );
  }
}

export default BubbleMenu;
