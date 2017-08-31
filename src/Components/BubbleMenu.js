import React, { Component } from 'react';
import Bubble from './Bubble';
import './Bubbles.css';
import {TweenMax, Elastic, TweenLite,Linear} from "gsap";
import Draggable from "gsap/Draggable";


var bubbleId = ["bubble0", "bubble1", "bubble2", "bubble3", "bubble4"] ; 



var pink ={
startColor : "#FFE8C2" , 
endColor: "#FF6B9E"
};


var greenblue ={
startColor : "#4CFF61" , 
endColor: "#369FEE"
};


var purplemagenta ={
startColor : "#2D2DE4" , 
endColor: "#FF67C1"
};

var orange ={
startColor : "#FFFB65" , 
endColor: "#FF2A2A"
};

var green ={
startColor : "#10DC0F" , 
endColor: "#CFFF5C"
};

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
    y2: 50 ,
    x3: -50 ,
    y3: 50 ,
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
    this.props.showForm(bubbleId) ;

      if( bubbleId[i] === id ){
      TweenLite.to('#'+id, 0.6, { ease: Elastic.easeIn.config(0.9, 0.9) ,scale:0, rotation:0, fillOpacity: 0});
      
      }
      else{
         TweenMax.to('#'+ bubbleId[i], 10, { y:-1000, fillOpacity: 0 });


      }


  } 
   }

  componentDidMount() {
  window.onload = function(){


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



bubble1.addEventListener("drag", grow("#bubble1" ) );
bubble2.addEventListener("drag", grow("#bubble2" ) );
bubble3.addEventListener("drag", grow("#bubble3" ) );
bubble4.addEventListener("drag", grow("#bubble4" ) );
bubble0.addEventListener("drag", grow("#bubble0" ) );


function grow(id){
  return function(){
  
     TweenMax.to(id, 4, {scale:1.5} );
  }
}


function move(id, typex){
  return function(){
    var type = typex;
     TweenMax.to(id, type.s, {yoyo: true ,bezier:[{x:type.x1, y:type.y1}, {x:type.x2, y:type.y2}, {x:type.x3, y:type.y3}, {x:type.x4, y:type.y4}], ease:Linear.easeNone ,repeat:-1} );
  }
}

  }


}

  render() {
    return (
      <div>
     <Bubble onClick={()=>this.burst(bubbleId[0] , bubbleId)} myID={bubbleId[0]} bubbleText ="Legal" type={type1} size={small} shade={green} />
      <Bubble onClick={()=>this.burst(bubbleId[1], bubbleId)}  myID={bubbleId[1]} bubbleText ="Career"  bubbleText2 = "Counselling" type={type2}  size={large} shade={purplemagenta}/>
       <Bubble  onClick={()=>this.burst(bubbleId[2], bubbleId)}  myID={bubbleId[2]} bubbleText = "Sexual" bubbleText2 = "Orientation" type={type3}  size={large}  shade={pink}/>
      <Bubble onClick={()=>this.burst(bubbleId[3] , bubbleId)} myID={bubbleId[3]} bubbleText ="Mental" bubbleText2 = "Wellness" type={type4} size={medium} shade={orange} />
    <Bubble onClick={()=>this.burst(bubbleId[4], bubbleId)}  myID={bubbleId[4]} bubbleText ="Relationships"  type={type5}  size={medium} shade={greenblue}/>
      
      </div>
    );
  }
}

export default BubbleMenu;
