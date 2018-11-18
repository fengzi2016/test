import React from 'react';
import Questions from '../components/Question';

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
        
        return (
            <Questions handleChange={this.hanleChange} questions={questions} title={title} time={time} />
        )
    }
}
export default Question;