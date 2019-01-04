import React from 'react';
import List from '../components/TestList';
import {fetchTestListAction} from '../actions/actions';
import {connect} from 'react-redux';
import cookie from '../common/cookie';

const  name = cookie.getCookie('name');

class TestList extends React.Component {
  state = {
    columns: [{
      title: '总分',
      dataIndex: 'scores',
      width: 100,
    }, 
    {
        title: '考试时间',
        dataIndex: 'start_str',
        width: 200,
       // sorter: (a, b) => new Date(a)-new Date(b.date)>0
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

  componentDidMount(){
    //const id = cookie.getCookie('id');
    //this.props.dispatch(fetch(fetchTestListAction(id)))
    this.props.dispatch(fetchTestListAction("1"));
  }
  handleTableChange = (pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    console.log(this.props.data)
    return (
       
        <List handleTableChange={this.handleTableChange} columns={this.state.columns} name = {name} data={this.props.data} />
   
    );
  }
}


export default connect((store)=>{
  
  return {
    data:store.tests.data
  }
})(TestList)
