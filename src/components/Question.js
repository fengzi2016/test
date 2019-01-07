import React from 'react';
import {Radio,Anchor,Button} from 'antd';
import PropTypes from 'prop-types';
import './Question.css';
import ReactCountdownClock from 'react-countdown-clock';


const RadioGroup = Radio.Group;
const Questions = ({handleChange,questions,handleCommit,title,handleClick}) => {
    return (
        <div className="questionContainer">
        <div className="quesitonTitle">
            {title}
            </div>
        <div className="button">
            <ReactCountdownClock seconds={60}
                     color="#000"
                     alpha={0.9}
                     size={100}
                     onComplete={handleCommit} />
       </div>
        {questions.map((question,index)=>{
           
            return (
                <div className="radioGroupContainer">
               <strong>{ index+1 + '.' + question.question_contents}</strong> 
                <br />
                <br />
                <RadioGroup 
                    onChange={handleChange} 
                    id={question.question_id}
                    className="radioGroup"

                >


                    {question.options.map((value,i)=>{
                        return (
                            <Radio value={i} size="large" seq={index} >
                                {value}
                            </Radio>
                        )
                    })}
                </RadioGroup>
                <br />
                <br />
                </div>
            )
        })}
        <div className="button">
        <Button onClick={handleClick} type="primary" className="submit"> 提交</Button>
        </div>
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