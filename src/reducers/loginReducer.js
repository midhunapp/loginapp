import {loginConstants} from '../constants/loginConstants'
  
  const initialState = {
    requesting: false,
    successful: false,
    loginStatus: '',
   // errors: [],
  }

 const reducer = function loginReducer (state = initialState, action) {

    switch (action.type) {
      // Set the requesting flag and append a message to be shown
      case loginConstants.LOGIN_REQUESTING:
        return {
          requesting: true,
          successful: false,
          //messages: [{ body: 'Logging in...', time: new Date() }],
          //errors: [],
        }
  
      // Successful?  Reset the login state.
      case loginConstants.LOGIN_SUCCESS:
        return {
          ...state,
          requesting: false,
          successful: true,
          loginStatus:'Login successfull'
        }
  
        case loginConstants.LOGIN_ERROR:
          return {
            //errors: [],
            //messages: [],
            requesting: false,
            successful: false,
            loginStatus:'Something went wrong'
          }
          case loginConstants.LOGOUT_REQUESTING:
            return {
              requesting: false,
              successful: false,
              loginStatus:''
            }
          case loginConstants.LOGOUT_SUCCESS:
            return {
              requesting: false,
              successful: true,
              loginStatus:''
            }
      default:
        return state
    }
  }
  
  export default   reducer