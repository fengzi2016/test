import React from 'react';
import {Form} from 'antd';
import {Redirect,withRouter} from 'react-router-dom';
import {logup} from '../actions/actions'; 
import LogupForm from '../components/Logup';
import sendCode from '../common/mail';
import {connect} from 'react-redux';
import cookie from '../common/cookie';


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
          const {password,email,passwordComfirm,activation_code} = values;
          const name = email;
          const userType = "学生";
        if(password!==passwordComfirm) {
            alert("确认密码与原密码不同，请重新输入");
        } else {
           let keys = Object.keys(values);
           keys.forEach(key=>{
             cookie.deleteCookie(key);
             cookie.setCookie(key,values[key]);
           })
           this.props.dispatch(logup(userType,password,email,name,activation_code));
          
          }

        console.log('Received values of form: ', values);
      }
    });
    
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.data.users.logup){
     this.props.history.push('/login');
    }
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
export default withRouter(connect(
  (user)=>{return {
    data:user
  }}
)(WrappedNormalLogupForm));
