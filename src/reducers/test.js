import {FETCH_TEST_LIST,FETCH_TEST_LIST_FAILURE,FETCH_TEST_LIST_SUCCESS} from '../actions/actions';
import {CREATE_A_RECORD,CREATE_A_RECORD_FAILURE,CREATE_A_RECORD_SUCCESS} from '../actions/actions';
import {COMMIT_A_TEST,COMMIT_A_TEST_SUCCESS,COMMIT_A_TEST_FAILURE } from '../actions/actions';
const choices = ["java","c语言"]
const TEST = (state = {}, action) => {
     console.log(action.type)
    switch (action.type) {
      case COMMIT_A_TEST:
      return {
        ...state,
        isLoading:true
      }
      case COMMIT_A_TEST_SUCCESS: 
      console.log(action.data)
      const result = action.data || [];
      const info = result[0];
      const {score} = info;
      return {
        ...state,
        ...info,
        isLoading:false,
        score,
      }
      case COMMIT_A_TEST_FAILURE:
       
      case FETCH_TEST_LIST:
        return {
          ...state,
          isLoading:true
        }
      
      case FETCH_TEST_LIST_SUCCESS:
          console.log(action.data)
          let data = action.data || [];
            data.map(element => {
              element["subject_name"] = choices[Number(element["subject_id"])-1];
              // const duration =element["start_str"] + '~' + element["end_str"];
              // element["duration"] = duration;
              return element;
            });
            return {
              isLoading:false,
              ...state,
              data
            }
            
          
          case FETCH_TEST_LIST_FAILURE:
           console.log(action.err)
            return {
              isLoading:false,
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