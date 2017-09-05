import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Animate from 'react-simple-animate';
class FormComponent extends Component {
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
        <Form>
        <legend className = "white" >Share your problem with us!</legend>
        <Textarea  hint="Share your problem. We'll keep it a secret. *Promise*. Our team will reply back anonymously. It is completely safe & automated. " />
        <Input   hint="Email ID (You will receive our response on this) " />
        <div  className= "outlineButton" onClick= {this.props.onClick} >Submit</div>
      </Form>
      </Animate>
    );
  }
}

export default FormComponent;
