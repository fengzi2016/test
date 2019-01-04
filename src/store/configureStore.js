// if(process.env.NODE_ENV === 'production') {
//     module.exports = require('./configureStore.prod');
// }else{
//     module.exports = require('./configureStore.dev');
// }

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import app from '../reducers'
import dataSaga from '../middleware/saga'
const sagaMiddleware = createSagaMiddleware()
export default function configureStore() {
    const store = createStore(app, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(dataSaga)
    return store
  }
 