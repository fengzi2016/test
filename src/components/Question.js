import React from 'react';
import {Radio,Anchor,Button} from 'antd';
import PropTypes from 'prop-types';
import './Question.css';

const RadioGroup = Radio.Group;
const Questions = ({handleChange,questions,time,title}) => {
    return (
        <div className="questionContainer">
        <div className="quesitonTitle">
            {title}
            </div>
        <Anchor className="questionTime">倒计时：{time}</Anchor>
       
        {questions.map((question,index)=>{
            return (
                <div className="radioGroupContainer">
                { index+1 + '.' + question.content} <br />
                <RadioGroup 
                    onChange={handleChange} 
                    id={question.id}
                    className="radioGroup"

                >

                    {question.options.map((value)=>{
                        return (
                            <Radio value={value} >
                                {value}
                            </Radio>
                        )
                    })}
                </RadioGroup>
                </div>
            )
        })}
        
        <Button href="./success" type="primary" className="submit"> 提交</Button>
       
        </div>
    )
}
Questions.PropTypes = {
    handleChange:PropTypes.func.isRequired,
    questions:PropTypes.object.isRequired,
    time:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}
export default Questions;