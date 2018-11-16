import React from 'react';
import { Table } from 'antd';

const List = ({data,columns,handleTableChange}) => {
    return (
      <Table
        style={{marginTop:"100px",padding:"20px"}}
        bordered
        columns={columns}
        dataSource={data}
        onChange={handleTableChange}
      />
    );
}
export default List;


