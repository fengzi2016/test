
import SERVICE from '../middleware/api';

const USER = (state = {}, action) => {
  
    switch (action.type) {
      case 'LOG_IN':
      console.log('into')
       return state;
        // SERVICE.login(action).then(response => {
        //   return {
        //     ...state,
        //     ...response
        //   }
        // })
        
      default:
        return state
    }
  }
  
  export default USER