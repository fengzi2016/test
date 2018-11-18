import React from 'react';
import Prototype from 'prop-types';
import {Icon,Button} from 'antd';

const Absort = ({handleClick}) => {
    return (
        <div className="successfulContainer">
            <Icon type="info-circle" theme="twoTone" />
            <div className="successfulContent">
               <p className="end">正在考试！！！</p>
               <p className="warn" >之前结果已保存，请继续考试！</p>
            </div>
            <Button onClick={handleClick} >继续考试</Button>
        </div>
    )
}
Absort.Prototype = {
    handleClick:Prototype.func.isRequired
}

export default Absort;