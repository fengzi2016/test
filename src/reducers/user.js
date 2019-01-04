

import {LOGIN_FAILURE,LOGIN_SUCCESS,LOGUP_FAILURE,LOGUP_SUCCESS,LOG_IN,LOG_UP} from '../actions/actions';
import Cookie from '../common/cookie';

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
            alert("已经注册过了");
            window.location.href='./login';
            return {
              ...state,
              isLoading:false,
          }
         case LOGUP_SUCCESS:
              console.log(action)
              var result = action.data
              var keyArr = Object.keys(result[0]);
              keyArr.forEach((key)=>{
                  Cookie.setCookie(key,result[0][key])
                })
              window.location.href='./login';
          return {
            ...state,
            isLoading:false,
          
          }
          case LOGIN_FAILURE:
            console.log(action)

            switch(action.err.status){
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
            case LOGIN_SUCCESS:
          
            window.location.href='./info';
             return {
               ...state,
               isLoading:false,
               ...action.data
             }
            
  
      default:
        return state;
    }
  }
  
  export default USER