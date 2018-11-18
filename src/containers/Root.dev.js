import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import App from './App';
import Login from './Login';
import Logup from './Logup';
import List from './TestList';
import SelectSubject from './SelectSubject';
import ExamNote from './ExamNote';
import Question from './Question';
import Success from './Successful';
import Absort from './Absort';

const Root = ({store}) => (
        <Provider store={store}>
        <div>
            <Route path="/" exact  component={App} />
            <Route path="/logup" component={Logup} /> 
            <Route path="/login" component={Login} />
            <Route path="/info" component={List} />
            <Route path="/select" component={SelectSubject} />
            <Route path="/note" component={ExamNote} />
            <Route path="/question" component={Question} />
            <Route path="/success" component={Success} />
            <Route path="/absort" component={Absort} />
        </div> 
    </Provider>
)
Root.propTypes = {
    store: PropTypes.object.isRequired,
}
  
export default Root