import React from 'react';
import {Form} from 'antd';
import LogupForm from '../components/Logup';

class NormalLogupForm extends React.Component {
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
     />
    );
  }
}

const WrappedNormalLogupForm = Form.create()(NormalLogupForm);

export default WrappedNormalLogupForm;