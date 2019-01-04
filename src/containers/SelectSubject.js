import React from 'react';
import SelectSubject from '../components/SelectSubject';
import cookie from '../common/cookie';
import {create_a_record} from '../actions/actions';

const options = {
    defaultValue:'java',
    values:['java','c']
}
    


class SelectSubjects extends React.Component {
  handleChange = (subject_name) => {
    // subject_name,user_id,start_time
     const user_id = cookie.getCookie("id");
     var time = Date.now();
     this.props.dispatch(create_a_record(subject_name,user_id,time));
  }
  render() {
    return (
     <SelectSubject
       handleChange={this.handleChange}
       options={options}
     />
    );
  }
}

export default SelectSubjects;