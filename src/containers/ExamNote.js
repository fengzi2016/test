import React from 'react';
import ExamNote from '../components/ExamNote';
import { connect } from 'net';

class Note extends React.Component {
    hanldeClick = (value) => {
        window.location.href = './question'

    }
    render() {
        return (
            <ExamNote handleClick={this.handleClick}/>
        )
    }
}
export default connect()(Note)
