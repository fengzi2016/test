import React from 'react';
import ExamNote from '../components/ExamNote';

class Note extends React.Component {
    hanldeClick = (value) => {
        console.log(value)
        window.location.href = './question'
    }
    render() {
        return (
            <ExamNote handleClick={this.handleClick} />
        )
    }
}
export default Note;