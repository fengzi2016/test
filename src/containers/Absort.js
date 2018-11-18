import React from 'react';
import Absort from '../components/Absort';

class Absorted extends React.Component{
    handleClick = (e) => {
        window.location.href = './questions'
    }
    render() {
        return (
            <Absort handleClick={this.handleClick} />
        )
    }
}
export default Absorted;