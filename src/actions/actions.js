/*
 * action 类型
 */

const ADD_TODO = 'ADD_TODO'
const EDIT_TODO = 'EDIT_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

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
export const addTodo = makeActionCreator(ADD_TODO, 'todo')
export const editTodo = makeActionCreator(EDIT_TODO, 'id', 'todo')
export const removeTodo = makeActionCreator(REMOVE_TODO, 'id')