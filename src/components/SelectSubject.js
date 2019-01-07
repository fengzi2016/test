import React from 'react';
import { Select, Button , Row, Col} from 'antd';
import PropTypes from 'prop-types';
import './SelectSubject.css';

const Option = Select.Option;

const SelectSubjects = ({handleChange,options,handleClick}) => {
    return (
    <div className="selectContainer">
        <a>上一步</a>
        <Row className="selectFather" type="flex">
        <Col>
            选择科目：
        </Col>
        <Col>
        <Select  style={{ width: 120 }} defaultValue={options.defaultValue} onChange={handleChange} className="select">
            {options.values.map((value)=>{
                return (<Option value={value} key={value} >{value}</Option>)
            })}
        </Select>
        </Col>
        </Row>
        <div className="nextButton">
        <Button onClick={handleClick}>下一步</Button>
        </div>
    </div>
    )
}
SelectSubjects.propTypes = {
    handleChange:PropTypes.func.isRequired,
    options:PropTypes.object.isRequired,
    handleClick:PropTypes.func.isRequired
}
export default SelectSubjects;

