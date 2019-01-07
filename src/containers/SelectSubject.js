import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import SelectSubject from '../components/SelectSubject';
import cookie from '../common/cookie';


const options = {
    defaultValue:'java',
    values:['java','c']
}
    


class SelectSubjects extends React.Component {
  state = {
    subject_name : 'java'
  }
  handleClick = () => {
    const {subject_name} = this.state;
    const user_id = Number(cookie.getCookie("id"));
    const obj = {
      subject_name,user_id
    }
    
    for(let key in obj){
      cookie.setCookie(key,obj[key])
    }
    this.props.history.push('./note')
  }
  handleChange = (subject_name) => {
    this.setState({subject_name:subject_name})
  }

  render() {
    return (
     <SelectSubject
       handleChange={this.handleChange}
       options={options}
       handleClick={this.handleClick}
     />
    );
  }
}

export default withRouter(connect((store)=>{
  return {test:store.tests}
})(SelectSubjects));