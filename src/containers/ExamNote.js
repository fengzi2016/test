import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ExamNote from '../components/ExamNote';
import {create_a_record} from '../actions/actions';
import cookie from '../common/cookie';
class Note extends React.Component {
    hanldeClick = (value) => {
        var time = Date.now();
        var subject_name = cookie.getCookie('subject_name');
        var user_id = cookie.getCookie('user_id');
        this.props.dispatch(create_a_record(subject_name,Number(user_id),time))
    }
   
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.test.questions){
            this.props.history.push('./question')
        }
    }   
    render() {
        return (
            <ExamNote handleClick={this.hanldeClick}/>
        )
    }
}
export default withRouter(connect((store)=>{
    console.log(store)
    return {test:store.tests}
}

)(Note))
