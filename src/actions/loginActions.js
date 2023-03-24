
import {loginConstants} from '../constants/loginConstants'
  // In order to perform an action of type LOGIN_REQUESTING
  // we need an email and password
  export const loginRequest = function loginRequest ( email, password ) {

    return {
      type: loginConstants.LOGIN_REQUESTING,
      email:email,
      password:password,
    }
  }
  export const logoutRequest = function logoutRequest (  ) {
  
    return {
      type: loginConstants.LOGOUT_REQUESTING
    }
  }

  
  
