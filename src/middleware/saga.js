import { LOGUP_FAILURE,LOGIN_FAILURE,LOGIN_SUCCESS,LOGUP_SUCCESS,LOG_IN,LOG_UP,FETCH_TEST_LIST,FETCH_TEST_LIST_FAILURE,FETCH_TEST_LIST_SUCCESS,
CREATE_A_RECORD,CREATE_A_RECORD_SUCCESS,CREATE_A_RECORD_FAILURE } from '../actions/actions'
import { put, takeEvery } from 'redux-saga/effects'
import API from './api'

function* fetch_test_list(action) {
  try {
    const data = yield API.fetch(action);
    yield put({ type:FETCH_TEST_LIST_SUCCESS, data })
  } catch (e) {
    yield put({ type:FETCH_TEST_LIST_FAILURE, err:e })
  }
}
function* log_up(action){
    try {
        const data = yield API.logup(action);
        yield put({ type:LOGUP_SUCCESS, data})
      } catch (e) {
        yield put({ type:LOGUP_FAILURE, err:e })
      }
}
function* log_in(action){
    try {
        const data = yield API.login(action);
        yield put({ type:LOGIN_SUCCESS, data})
      } catch (e) {
        yield put({ type:LOGIN_FAILURE, err:e })
      }
}
function* createRecord(action){
    try {
        const data = yield API.createRecord(action);
        yield put({ type:CREATE_A_RECORD_SUCCESS, data})
      } catch (e) {
        yield put({ type:CREATE_A_RECORD_FAILURE, err:e })
      }
}
function* dataSaga () {
  yield takeEvery(FETCH_TEST_LIST,fetch_test_list);
  yield takeEvery(LOG_UP,log_up);
  yield takeEvery(LOG_IN,log_in);
  yield takeEvery(CREATE_A_RECORD,createRecord)
  
}

export default dataSaga;