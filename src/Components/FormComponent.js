import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
class FormComponent extends Component {
  render() {
    return (
        <Form>
        <legend>Share your problems with us!</legend>
        <Input hint="Email" />
        <Textarea hint="Enter your message" />
        <Button variant="raised">Submit</Button>
      </Form>
    );
  }
}

export default FormComponent;
