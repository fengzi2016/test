import React from 'react';
import { Table,Button } from 'antd';
import './TestList.css';

const List = ({data,name,columns,handleTableChange,handleClick}) => {

    return (
      <div className="list">
      <h2 style={{paddingTop:'100px'}} >{name}的个人中心</h2>
      <Table
        style={{marginTop:"50px",padding:"20px"}}
        bordered
        columns={columns}
        dataSource={data}
        onChange={handleTableChange}
        pagination={{pageSize:4}}
      />
      <Button type="primary" onClick={handleClick}> 开始考试</Button>
      </div>
    );
}
export default List;


