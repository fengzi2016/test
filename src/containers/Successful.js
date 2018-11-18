import React from 'react';
import Success from '../components/Successful';

class Successful extends React.Component{
    handleClick = (e) => {
        window.location.href = './info'
    }
    render() {
        return (
            <Success handleClick={this.handleClick} />
        )
    }
}
export default Successful;