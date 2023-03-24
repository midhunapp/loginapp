import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import combineReducer from '../reducer/CombineReducer';
import combineSagas from '../sagas/CombineSaga';
export default function configureStore() { 
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducer,
        compose(applyMiddleware(sagaMiddleware)));
        sagaMiddleware.run(combineSagas) 
    return store;
}