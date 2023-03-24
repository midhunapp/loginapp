import watchLoginRequest from '../sagas/loginSaga'
import { all } from 'redux-saga/effects'

export default function* IndexSaga () {
  ///alert('indexsaga')
  yield all ([
    watchLoginRequest()
  ])
}