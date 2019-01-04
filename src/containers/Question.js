import React from 'react';
import Questions from '../components/Question';
import { connect } from 'net';

class Question extends React.Component {
    hanleChange = (values) => {
        console.log(values)
    }
    
    render() {
        const questions = [
            {
                id:0,
                content:"你的名字",
                options:[
                    "guan",
                    "yun",
                    "feng"
                ]
            }
        ];
        const title = "你的考试";
        const time = "43:00";
        const {questions,time,title} = this.props.data;
        
        return (
            <Questions handleChange={this.hanleChange} questions={questions} title={title} time={time} />
        )
    }
}
export default connect((store)=>{
   return{data:store.tests}
})(Question);