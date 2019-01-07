import React from 'react'
import { render } from 'react-dom'
import {  Router } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import Root from './containers/Root'
import configureStore from './store/configureStore'
const history = createBrowserHistory();
const store = configureStore();
render(
  <Router history={history}>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

