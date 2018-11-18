import React from 'react';
import SelectSubject from '../components/SelectSubject';

const options = {
    defaultValue:'java',
    values:['java','c']
}
    


class SelectSubjects extends React.Component {
  handleChange = (values) => {
     
      console.log(values);
  }
  render() {
    return (
     <SelectSubject
       handleChange={this.handleChange}
       options={options}
     />
    );
  }
}

export default SelectSubjects;