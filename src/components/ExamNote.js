import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import './ExamNote.css';

const ExamNote = ({handleClick}) => {
    return (
        <div className="examNote">
        <a>上一级</a>

        <div className="noteContinaner"> 
            <div className="noteTitle">
                考试须知
            </div>
            <div className="noteContent">
               
                1. 本次考试时长为30分钟，中途可以自动退出或者提前交卷；<br />
                2. 本次考试共有10道题目，均为选择题，下滑即可看到剩余题目以及提交按钮；<br />
                3. 按要求诚信考试，不作弊不抄袭。<br />
              
            </div>
            <Button onClick={handleClick} className="noteButton" >同意并开始考试</Button>
        </div>
        </div>
    )
}
ExamNote.propTypes = {
    handleClick:PropTypes.func.isRequired,
}
export default ExamNote;

