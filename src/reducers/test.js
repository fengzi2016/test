
import {FETCH_TEST_LIST,FETCH_TEST_LIST_SUCCESS,FETCH_TEST_LIST_FAILURE} from '../actions/actions';
const TEST = (state = {}, action) => {
     
    switch (action.type) {
      case FETCH_TEST_LIST:
        return {
          ...state,
          isLoading:true
        }
         case FETCH_TEST_LIST_SUCCESS:
          return {
            ...state,
            isLoading:!state.isLoading,
            ...action.payload
          }
          case FETCH_TEST_LIST_FAILURE:
         
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
              isLoading:!state.isLoading,
            }
            
  
      default:
            console.log('into')
        return state;
    }
  }
  
  export default TEST