/*
 * action 类型
 */

// const ADD_TODO = 'ADD_TODO'
// const EDIT_TODO = 'EDIT_TODO'
// const REMOVE_TODO = 'REMOVE_TODO'
import service from '../middleware/api'


/*
 * 其它的常量
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action 创建函数
 */

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index }
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }

function makeActionCreator(type,...argNames){
    return function(...args){
        let action = {type};
        argNames.forEach((arg,index)=>{
            action[argNames[index]] = args[index];
        })
        return action;
    }
}


// export const fetch = (args) => {
//     console.log(args.type)
//     return (dispatch,getState)=>{
//         if(!getState().isLoading){
//             dispatch(args);
//         }
//        return service[args.type](args)(dispatch);
//     }
// }
// export const fetchTestList = (args) => {
//     return (dispatch,getState)=>{
//         if(!getState().isLoading){
//             dispatch(fetchTestListAction(args));
//         }
//        return service.fetchTestListAction(args)(dispatch);
//     }
// }
// export const fetch2 = (args) => {
//     return (dispatch)=>{
//         dispatch(args);
//         service[args.type](args);
//     }
// }
// export function fetchData() {
//     return (dispatch) => {
//       dispatch(getData())
//       getPeople()
//         .then((data) => {
//           dispatch(getDataSuccess(data))
//         })
//         .catch((err) => console.log('err:', err))
//     }
//   }
  
 
const LOG_IN = "LOG_IN";
const LOG_UP = "LOG_UP";
const LOGUP_SUCCESS = "LOGUP_SUCCESS";
const LOGUP_FAILURE = "LOGUP_FAILURE";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const FETCH_TEST_LIST = "FETCH_TEST_LIST";
const FETCH_TEST_LIST_SUCCESS = "FETCH_TEST_LIST_SUCCESS";
const FETCH_TEST_LIST_FAILURE= "FETCH_TEST_LIST_FAILURE";
const CREATE_A_RECORD = "CREATE_A_RECORD";
const CREATE_A_RECORD_SUCCESS = "CREATE_A_RECORD_SUCCESS";
const CREATE_A_RECORD_FAILURE = "CREATE_A_RECORD_FAILURE";
const COMMIT_A_TEST = "COMMIT_A_TEST";
const COMMIT_A_TEST_SUCCESS = "COMMIT_A_TEST_SUCCESS";
const COMMIT_A_TEST_FAILURE = "COMMIT_A_TEST_FAILURE";

export {
    LOG_IN,
    LOG_UP,
    CREATE_A_RECORD,
    CREATE_A_RECORD_SUCCESS,
    CREATE_A_RECORD_FAILURE,
    LOGUP_SUCCESS,
    LOGUP_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_TEST_LIST,
    FETCH_TEST_LIST_SUCCESS,
    FETCH_TEST_LIST_FAILURE,
    COMMIT_A_TEST,
    COMMIT_A_TEST_SUCCESS,
    COMMIT_A_TEST_FAILURE
}

export const commit_a_test = makeActionCreator(COMMIT_A_TEST,'id','answers_id','end_time');
export const create_a_record = makeActionCreator(CREATE_A_RECORD,'subject_name','user_id','start_time');
export const create_a_record_successful = makeActionCreator(CREATE_A_RECORD_SUCCESS,'response');
export const create_a_record_failure = makeActionCreator(CREATE_A_RECORD_FAILURE,'error')
export const fetchTestListAction = makeActionCreator(FETCH_TEST_LIST,'id');
export const fetchTestList_success = makeActionCreator(FETCH_TEST_LIST_SUCCESS,'response');
export const fetchTestList_failure = makeActionCreator(FETCH_TEST_LIST_FAILURE,'error');
export const login = makeActionCreator(LOG_IN,'email','password');
export const logup = makeActionCreator(LOG_UP,'userType','password','email','name','activation_code');
export const logup_success = makeActionCreator(LOGUP_SUCCESS,"response");
export const logup_failure = makeActionCreator(LOGUP_FAILURE,"error");
export const login_success = makeActionCreator(LOGIN_SUCCESS,"response");
export const login_failure = makeActionCreator(LOGIN_FAILURE,"error");
