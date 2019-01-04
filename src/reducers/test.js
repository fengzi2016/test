
import {FETCH_TEST_LIST,FETCH_TEST_LIST_FAILURE,FETCH_TEST_LIST_SUCCESS,CREATE_A_RECORD,CREATE_A_RECORD_FAILURE,CREATE_A_RECORD_SUCCESS} from '../actions/actions';
const TEST = (state = {}, action) => {
     console.log(action.type)
    switch (action.type) {
      case FETCH_TEST_LIST:
        return {
          ...state,
          isLoading:true
        }
      
      case FETCH_TEST_LIST_SUCCESS:
          let data = action.data || [];
           return {
             ...state,
             data
           }
            
          
          case FETCH_TEST_LIST_FAILURE:
          
            return {
              ...state
            }

            case CREATE_A_RECORD:
            return {
              ...state,
              isLoading:true
            }
            case CREATE_A_RECORD_SUCCESS:
              
             return {
               ...state,
               isLoading:false,
               questions:action.data
            }
            case CREATE_A_RECORD_FAILURE:
              console.log(action.err);
              return {
                ...state,
                isLoading:false,
              }

  
      default:
        return state;
    }
  }
  
  export default TEST