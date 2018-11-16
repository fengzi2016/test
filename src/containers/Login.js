import React from 'react';
import {Form} from 'antd';
import LoginForm from '../compoents/Login';

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {form}= this.props ;
    return (
     <LoginForm 
        form={form}
        handleSubmit={this.handleSubmit}
     />
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;