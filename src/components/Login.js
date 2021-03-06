import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.css';
const FormItem = Form.Item;

const NormalLoginForm = ({data,form,handleSubmit}) => {
  const { getFieldDecorator } = form;
  const {email,password} = data;
 
  
  return (
    <Form onSubmit={handleSubmit} className="login-form">
    <div className="airplane" ></div>
    <FormItem>
      {getFieldDecorator('email', {
        initialValue:email,
        rules: [{ required: true, message: 'Please input your email!' }],
      })(
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
      )}
    </FormItem>
    <FormItem>
      {getFieldDecorator('password', {
       initialValue:password,
        rules: [{ required: true, message: 'Please input your Password!' ,type:"email"}],
      })(
        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
      )}
    </FormItem>
    <FormItem>
      {getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true,
      })(
        <Checkbox>Remember me</Checkbox>
      )}
      <a className="login-form-forgot" href="">Forgot password</a>
      <Button type="primary" htmlType="submit" className="login-form-button" >
        Log in
      </Button>
      <br />
      Or <a href="/logup">register now!</a>
    </FormItem>
  </Form>

  )
}
NormalLoginForm.propTypes = {
  handleSubmit:PropTypes.func.isRequired,
  form:PropTypes.object.isRequired
}

export default NormalLoginForm;
