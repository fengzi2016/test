import React from 'react';
import Prototype from 'prop-types';
import {Icon,Button} from 'antd';
import './Successful.css';

const Successful = ({handleClick,scores}) => {
    return (
        <div className="successfulContainer">
            <Icon type="check-circle" theme="filled"  style={{fontSize:'100px',marginBottom:'30px'}} />
            <div className="successfulContent">
               <p className="end">考试结束！！！</p>
               <p className="warn" >本次成绩为:<strong>{scores}</ strong></p>
            </div>
            <Button onClick={handleClick} >返回个人中心</Button>
        </div>
    )
}

Successful.Prototype = {
    handleClick:Prototype.func.isRequired
}

export default Successful;