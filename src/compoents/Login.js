import React from 'react';
import PropTypes from 'prop-types';
import style  from './Login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

const NormalLoginForm = ({form,handleSubmit}) => {
  const { getFieldDecorator } = form;
  return (
    <Form style={style} onSubmit={handleSubmit} className="login-form">
    <FormItem>
      {getFieldDecorator('userName', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
      )}
    </FormItem>
    <FormItem>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Please input your Password!' }],
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
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
      <br />
      Or <a href="">register now!</a>
    </FormItem>
  </Form>

  )
}
NormalLoginForm.PropTypes = {
  handleSubmit:PropTypes.func.isRequired,
  form:PropTypes.object.isRequired
}
export default NormalLoginForm;