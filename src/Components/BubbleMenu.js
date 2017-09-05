import React, { Component } from 'react';
import Bubble from './Bubble';
import './Bubbles.css';
import {TweenMax, Elastic, TweenLite,Linear} from "gsap";
import Draggable from "gsap/Draggable";
import Animate from 'react-simple-animate';
import Sound from 'react-sound';


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


var bubbles = [ { id : "bubble0" , shade : { startColor : "#10DC0F" , endColor: "#CFFF5C" } , type: type1 , size : small , bubbleText :"Legal"  }, 
                { id : "bubble1" , shade : {startColor : "#2D2DE4" , endColor: "#FF67C1" }, type: type2 , size : large , bubbleText :"Career" , bubbleText2 :"Counselling"}, 
                { id : "bubble2" , shade : {startColor : "#FFE8C2" , endColor: "#FF6B9E" }, type: type3 , size : large , bubbleText : "Sexual" ,bubbleText2 : "Orientation"}, 
                { id : "bubble3" , shade : {startColor : "#FFFB65" , endColor: "#FF2A2A" }, type: type4 , size : medium, bubbleText :"Mental" ,bubbleText2 : "Wellness"}, 
                { id : "bubble4" , shade : {startColor : "#4CFF61" , endColor: "#369FEE" }, type: type5 , size : medium, bubbleText :"Relationships" }] ;


class BubbleMenu extends Component {

  constructor(props){
    super(props);
    this.state = {
      status:Sound.status.STOPPED,
      sound:false
    }
  }
  burst(id , bubbles ) {
  this.setState({
    status:Sound.status.PLAYING,
    sound:true
  })
  
  

  for(var i = 0 ; i < bubbles.length ; i++){
 
      
      if( bubbles[i].id === id ){
      TweenLite.to('#'+id, 0.7, { ease: Elastic.easeIn.config(0.9, 0.5) ,scale:0, rotation:0, fillOpacity: 0});
      var shade = bubbles[i].shade
      }
      else{

         TweenMax.to('#'+ bubbles[i].id, 10, { y:-1000, fillOpacity: 0 });
         Draggable.get('#'+ bubbles[i].id).disable();
      }
  }
     this.props.showForm(id, shade) ;
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
      <div>
     <Bubble onClick={()=>this.burst(bubbles[0].id , bubbles)} myID={bubbles[0].id} bubbleText ={bubbles[0].bubbleText} type={bubbles[0].type} size={bubbles[0].size} shade={bubbles[0].shade} />
      <Bubble onClick={()=>this.burst(bubbles[1].id, bubbles)}  myID={bubbles[1].id} bubbleText ={bubbles[1].bubbleText}  bubbleText2 = {bubbles[1].bubbleText2} type={bubbles[1].type} size={bubbles[1].size} shade={bubbles[1].shade}/>
       <Bubble  onClick={()=>this.burst(bubbles[2].id, bubbles)}  myID={bubbles[2].id} bubbleText = {bubbles[2].bubbleText} bubbleText2 = {bubbles[2].bubbleText2}type={bubbles[2].type}  size={bubbles[2].size}  shade={bubbles[2].shade}/>
      <Bubble onClick={()=>this.burst(bubbles[3].id , bubbles)} myID={bubbles[3].id} bubbleText ={bubbles[3].bubbleText} bubbleText2 = {bubbles[3].bubbleText2} type={bubbles[3].type} size={bubbles[3].size} shade={bubbles[3].shade} />
    <Bubble onClick={()=>this.burst(bubbles[4].id ,bubbles)}  myID={bubbles[4].id} bubbleText ={bubbles[4].bubbleText}  type={bubbles[4].type}  size={bubbles[4].size} shade={bubbles[4].shade}/>
      {this.state.sound && <Sound
      url="http://soundbible.com/mp3/Gum_Bubble_Pop-Sound_Explorer-1206462561.mp3"
      playStatus={this.state.status}
      onFinishedPlaying={() => this.setState({sound: false})}
    />}
      </div>
      </Animate>
    );
  }
}

export default BubbleMenu;
