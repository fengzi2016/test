// 容器类，数据处理，事件监听，调用ui类
import React, { Component } from 'react';
import {connect} from 'react-redux';
import App from '../components/App';

class Appn extends Component {
  render() {
    return (
     <App />
    );
  }
}
export default connect()(Appn)

