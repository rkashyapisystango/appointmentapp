import { all } from 'redux-saga/effects'
import authSagas from './authSagas'
import appointmentSagas from './appointmentSagas'

export default function* rootSaga() {
  yield all([
    authSagas(),
    appointmentSagas()
  ])
}
