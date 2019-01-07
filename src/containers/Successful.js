import React from 'react';
import Success from '../components/Successful';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Successful extends React.Component{
    handleClick = (e) => {
        this.props.history.push('./info');
    }
    render() {
        const {scores} = this.props.test
        return (
            <Success handleClick={this.handleClick} scores={scores} />
        )
    }
}
export default withRouter(connect((store)=>{
    return {
        test:store.tests
    }
})(Successful));