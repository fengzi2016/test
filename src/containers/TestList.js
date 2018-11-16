import React from 'react';
import List from '../components/TestList';

const  data = [{
    key: 0,
    date: '2018-02-11',
    scores: 120,
    subject: 'income',
  }, {
    key: 1,
    date: '2018-03-11',
    scores: 243,
    subject: 'income',

  }, {
    key: 2,
    date: '2018-04-11',
    scores: 98,
    subject: 'income',
   
  }];

class TestList extends React.Component {
  state = {
    columns: [{
      title: '总分',
      dataIndex: 'scores',
      width: 100,
    }, 
    {
        title: '考试时间',
        dataIndex: 'date',
        width: 200,
        sorter: (a, b) => new Date(a.date)-new Date(b.date)>0
    }, 
    {
      title: '科目',
      dataIndex: 'subject',
      width: 100,
      filters: [
        { text: 'c语言', value: 'c' },
        { text: 'java', value: 'java' },
      ],
    }],
  };


  handleTableChange = (pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    return (
       
        <List handleTableChange={this.handleTableChange} columns={this.state.columns} data={data} />
   
    );
  }
}

export default TestList;
