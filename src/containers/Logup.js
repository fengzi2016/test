import React from 'react';
import {Form} from 'antd';
import LogupForm from '../components/Logup';
import sendCode from '../common/mail';



class NormalLogupForm extends React.Component {
  handleSendCode = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          const {email} = values;
          // 邮箱验证

    var mail = {
      // 发件人
      from: 'ZWGH在线考试系统',
      // 主题
      subject: '用户注册验证码',
      // 收件人
      to: email,
      // 邮件内容，HTML格式
      text: '激活码为：' +  parseInt(Math.random()*(9999-1000+1)+1000,10)
       //接收激活请求的链接
    };
    sendCode(mail);
        console.log('Received values of form: ', values);
      }
   
    });
    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          const {password,email,passwordComfirm} = values;
        if(password!==passwordComfirm) {
            alert("确认密码与原密码不同，请重新输入");
        } else {
            // dispatch
            window.location.href = "/login"
        }
        console.log('Received values of form: ', values);
      }
    });
    
  }

  render() {
    const {form}= this.props ;
    return (
     <LogupForm 
        form={form}
        handleSubmit={this.handleSubmit}
        handleSendCode={this.handleSendCode}
     />
    );
  }
}

const WrappedNormalLogupForm = Form.create()(NormalLogupForm);

export default WrappedNormalLogupForm;