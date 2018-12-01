import React from 'react';
import {Form} from 'antd';
import LoginForm from '../components/Login';
import {login} from '../actions/actions'; 
import {connect} from 'react-redux';

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    // window.location.href = './info'
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const {email,password} = values;
      this.props.dispatch(login(email,password));
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {

    const {form}= this.props;
   
    return (
     <LoginForm 
        form={form}
        handleSubmit={this.handleSubmit}
     />
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default connect()(WrappedNormalLoginForm)