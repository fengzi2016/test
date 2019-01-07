import React from 'react';
import { withRouter } from 'react-router-dom';
import List from '../components/TestList';
import {fetchTestListAction} from '../actions/actions';
import {connect} from 'react-redux';
import cookie from '../common/cookie';



class TestList extends React.Component {
  state = {
    name:null,
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
      dataIndex: 'subject_name',
      width: 100,
      filters: [
        { text: 'c语言', value: '2' },
        { text: 'java', value: '1' },
      ],
    }],
  };

  componentDidMount(){
    const id = cookie.getCookie('id');
    //this.props.dispatch(fetch(fetchTestListAction(id)))
    const name = cookie.getCookie('email');
    this.setState({name});
    this.props.dispatch(fetchTestListAction(id));
  }
  handleTableChange = (pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter);
  }
  handleClick = () =>{
    this.props.history.push('./select')
  }
 
  render() {
    
    // const data =  [];
    // if(this.props.data){
    //   data = Object.create(this.props.data);
    //   data.map(element => {
    //     element["subject_name"] = choices[Number(element["subject_id"])-1];
    //   });
    // }
   const {name} = this.state;
    return (
       
        <List handleTableChange={this.handleTableChange}
        handleClick={this.handleClick}
        columns={this.state.columns} name = {name} data={this.props.data} />
   
    );
  }
}


export default 
  withRouter(connect((store)=>{
    return {
      data:store.tests.data
    }
  })(TestList))

