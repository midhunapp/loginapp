import {call,put,takeEvery} from "redux-saga/effects";
//call --used to call caller urls and apis
//put--used to call actions
//takeEvery --used to watch a function or watch an action
import { loginSuccess } from './loginState';
function* loginApi (email, password) {
    alert(email+' '+password)
    if(email=='admin@gmail.com'&& password=='admin')
    return {
      userid:11111
    };
    else{
      return {
        userid:null
      };
    }
  }

function* workLoginFlow(action){
    alert(JSON.stringify(action))
    const { email, password } = action.payload;
    let  {userid}= yield call(loginApi, email, password);alert(userid);
    yield put(loginSuccess(userid));
}

function* loginSaga(){
  alert('watch')
    yield takeEvery("login/loginRequest",workLoginFlow)
}
export default loginSaga;