import React from 'react';
import { Table,Button } from 'antd';
import './TestList.css';

const List = ({data,columns,handleTableChange}) => {
    return (
      <div className="list">
      <h2 style={{paddingTop:'200px'}} >张漫的个人中心</h2>
      <Table
        style={{marginTop:"50px",padding:"20px"}}
        bordered
        columns={columns}
        dataSource={data}
        onChange={handleTableChange}
      />
      <Button type="primary" href="./select"> 开始考试</Button>
      </div>
    );
}
export default List;


