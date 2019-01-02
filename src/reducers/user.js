

import {LOGIN_FAILURE,LOGIN_SUCCESS,LOGUP_FAILURE,LOGUP_SUCCESS,LOG_IN,LOG_UP} from '../actions/actions';

const USER = (state = {isLoading:false}, action) => {
     
    switch (action.type) {
      case LOG_IN:
        return {
          ...state,
          isLoading:true
        }
        case LOG_UP:
          return {
            ...state,
            isLoading:true
          }
          case LOGUP_FAILURE:
            alert('账户已经注册');
            return {
              ...state,
              isLoading:false,
          }
         case LOGUP_SUCCESS:
         console.log('log up ok')
         window.location.href='./login';
          return {
            ...state,
            isLoading:false,
            ...action.payload
          }
          case LOGIN_FAILURE:
         
            switch(action.payload.status){
              case 404:
               console.log("无此账号");
               break;
              case 304:
               console.log("密码错误");
               break;
              default: break;
            }

            return {
              ...state,
              isLoading:false,
            }
            
  
      default:
            console.log('into')
        return state;
    }
  }
  
  export default USER