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


export const fetch = (args) => {
    console.log(args.type)
    return (dispatch,getState)=>{
        if(!getState().isLoading){
            dispatch(args);
        }
       return service[args.type](args)(dispatch);
    }
}
// export const fetchTestList = (args) => {
//     return (dispatch,getState)=>{
//         if(!getState().isLoading){
//             dispatch(fetchTestListAction(args));
//         }
//        return service.fetchTestListAction(args)(dispatch);
//     }
// }

const LOG_IN = "LOG_IN";
const LOG_UP = "LOG_UP";
const LOGUP_SUCCESS = "LOGUP_SUCCESS";
const LOGUP_FAILURE = "LOGUP_FAILURE";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const FETCH_TEST_LIST = "FETCH_TEST_LIST";
const FETCH_TEST_LIST_SUCCESS = "FETCH_TEST_LIST_SUCCESS";
const FETCH_TEST_LIST_FAILURE= "FETCH_TEST_LIST_FAILURE";



export {
    LOG_IN,
    LOG_UP,
    LOGUP_SUCCESS,
    LOGUP_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_TEST_LIST,
    FETCH_TEST_LIST_SUCCESS,
    FETCH_TEST_LIST_FAILURE 
}



export const fetchTestListAction = makeActionCreator(FETCH_TEST_LIST,'id');
export const fetchTestList_success = makeActionCreator(FETCH_TEST_LIST_SUCCESS,'response');
export const fetchTestList_failure = makeActionCreator(FETCH_TEST_LIST_FAILURE,'error');
export const login = makeActionCreator(LOG_IN,'email','password');
export const logup = makeActionCreator(LOG_UP,'userType','password','email','name','activation_code');
export const logup_success = makeActionCreator(LOGUP_SUCCESS,"response");
export const logup_failure = makeActionCreator(LOGUP_FAILURE,"error");
export const login_success = makeActionCreator(LOGIN_SUCCESS,"response");
export const login_failure = makeActionCreator(LOGIN_FAILURE,"error");
