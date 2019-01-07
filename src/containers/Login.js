import React from 'react';
import {Form} from 'antd';
import {withRouter} from 'react-router-dom';
import LoginForm from '../components/Login';
import {login} from '../actions/actions'; 
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
      this.props.dispatch(login(email,password));
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  componentWillReceiveProps(nextProps){
    
    if(nextProps.users.data){
     this.props.history.push('./info')
    }
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

export default withRouter(connect((store)=>{
  return {users:store.users}
})(WrappedNormalLoginForm))