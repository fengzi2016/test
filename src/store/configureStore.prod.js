import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import dataSaga from '../middleware/saga'
const sagaMiddleware =  createSagaMiddleware();
const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(sagaMiddleware),
  sagaMiddleware.run(dataSaga)
)

export default configureStore

