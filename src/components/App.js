// 容器类，数据处理，事件监听，调用ui类
import React from 'react';
import {Button,Col,Row} from 'antd';
import {connect} from 'react-redux';
import './App.css'

const App = ({}) => {
    
    return (
      <div className="App">
        <div className="title">
        <p className="name"> ZWGH</p>
       
        <p>在线考试系统</p>
        </div>
       <Row gutter={24} type="flex" className="row">
           <Col><Button href='./login' >登陆</Button></Col>
           <Col><Button href='./logup'>注册</Button></Col>
       </Row>
    </div>


    );
  
}
export default connect()(App)

