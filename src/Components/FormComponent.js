import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
class FormComponent extends Component {
  render() {
    return (
        <Form>
        <legend>Share your problem with us!</legend>
        <Textarea hint="Share your problem. We'll keep it a secret. *Promise*. Our team will reply back anonymously. It is completely safe & automated. " />
        <Input hint="Email ID (You will receive our response on this) " />
        <Button   className= "outlineButton" >Submit</Button>
      </Form>
    );
  }
}

export default FormComponent;
