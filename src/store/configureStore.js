import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import loginReducer from '../feature/login/loginState';
import loginSaga from '../feature/login/loginSaga';
//import combineReducer from '../reducer/combineReducer';
//import combineSagas from '../sagas/combineSaga';
export default function store() { 
    const saga = createSagaMiddleware();
    const store = configureStore({
        reducer:{
            login:loginReducer
        },
        middleware:[saga]
    });
       saga.run(loginSaga) ;
   // sagaMiddleware.run(combineSagas) 
    return store;
}