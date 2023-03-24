

import { call, put, takeEvery } from 'redux-saga/effects'
//import {storeUserSession,removeUserSession} from '../config/UserSession'
import {loginConstants} from '../constants/loginConstants'
// Our login constants
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUESTING,
  LOGOUT_SUCCESS
} from '../ConstantsList'


function* loginApi (email, password) {
  //alert(email+' '+password)
  if(email=='admin'&& password=='admin')
  return {
    userid:1,
    token:'123',
    status:true,
    username:'admin'
  };
  else{
    return {
      userid:null,
      token:null,
      status:false,
      username:'admin'
    };
  }
}

function* loginFLow (action) {
  //alert(123)
  const { email, password } = action
  let  {userid,token,status,username}= yield call(loginApi, email, password);
  if(status){
  yield put({ type: LOGIN_SUCCESS })
 // yield put(setClient(token,userid,username));
  //storeUserSession(token,userid);
 // RootNavigation.navigate( "Home" as never, {  } as never);
  }
  else{
    yield put({ type: LOGIN_ERROR })
    //yield put(unsetClient())
  }
  
  }
  function* logoutFLow (action) {
    //alert('logout saga')
    yield put({ type: LOGOUT_SUCCESS })
    //removeUserSession();
   // yield put(unsetClient());
   // RootNavigation.navigate( "Login" as never, {  } as never);
  }



function* watchLoginRequest() {
  yield takeEvery(LOGIN_REQUESTING, loginFLow);
  yield takeEvery(LOGOUT_REQUESTING, logoutFLow);
}
export default watchLoginRequest
// Register all your watchers
/*export default function* loginWatcher() {
yield all ([
  watchLoginRequest()
])
}
*/
//export default loginWatcher