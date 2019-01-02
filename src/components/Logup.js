import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button,Row,Col} from 'antd';
import  './Logup.css';


const FormItem = Form.Item;

const NormalLogupForm = ({form,handleSubmit,handleSendCode}) => {
  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span:  19 },
  };
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <h1>用户注册</h1>
      <FormItem>
        {getFieldDecorator('email', {
          rules: [
              { required: true, message: 'Please input your email!',type:'email' }

          ],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
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
        {getFieldDecorator('passwordComfirm', {
          rules: [{ required: true, message: 'Please input your Password again!' }],
        })(
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password Again" />
        )}
      </FormItem>
      <FormItem
        // className="code"
        {...formItemLayout}
        // labelCol={span:1}
        >
        {getFieldDecorator('activation_code', {
            // rules: [{ required: true, message: 'Please input your code!' }],
        })(
         <Row type="flex" gutter={24} >
             <Col span={10}>
                <Input />
            </Col>
            <Col span={8}>
            <Button type="primary" htmlType="submit" style={{display:"inline-block"}} onClick={handleSendCode}>发送验证码</Button>
            </Col>
        </Row>
        )}
        </FormItem>
      
      <Button type="primary" htmlType="submit" className="login-form-button">
          Log up
      </Button>
  </Form>

  )
}
NormalLogupForm.propTypes = {
  handleSubmit:PropTypes.func.isRequired,
  form:PropTypes.object.isRequired
}
export default NormalLogupForm;