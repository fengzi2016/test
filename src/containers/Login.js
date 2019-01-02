import React from 'react';
import {Form} from 'antd';
import LoginForm from '../components/Login';
import {login, fetch} from '../actions/actions'; 
import {connect} from 'react-redux';
import Cookie from '../common/cookie';

class NormalLoginForm extends React.Component {
  state = {
    email:null,
    password:null
  }
  componentDidMount = () => {
    let email = Cookie.getCookie("email");
    let password = Cookie.getCookie("password");
    this.setState({
      email,password
    })
  }
  handleSubmit = (e) => {
    // window.location.href = './info'
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const {email,password} = values;
      // this.props.dispatch(login(email,password));
      //this.props.dispatch(fetchUser(email,password));
      this.props.dispatch(fetch(login(email,password)))
      
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {

    const {form}= this.props;
   
    return (
     <LoginForm 
        data={this.state}
        form={form}
        handleSubmit={this.handleSubmit}
     />
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default connect()(WrappedNormalLoginForm)