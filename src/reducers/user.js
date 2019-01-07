

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
            isLoading:true,
            logup:true
          }
          case LOGUP_FAILURE:
            alert("已经注册过了");
            return {
              ...state,
              isLoading:false,
              logup:true
          }
         case LOGUP_SUCCESS:
         
              
              var result = action.data
              var keyArr = Object.keys(result[0]);
              keyArr.forEach((key)=>{
                  Cookie.setCookie(key,result[0][key])
                })
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
            
            const data = action.data[0];
            if(!data) alert("密码错误")
             return {
               ...state,
               isLoading:false,
               data:data
             }
            
  
      default:
        return state;
    }
  }
  
  export default USER