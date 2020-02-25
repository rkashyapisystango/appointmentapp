import { all, call, put, takeLatest } from 'redux-saga/effects'
import {reset} from 'redux-form';
import { Add_APPOINTMENT } from 'actions/Appointments/actionTypes'
import { handleAddDateSuccess } from 'actions/Appointments';
import { pushNotification } from 'utils/notifications'

function* addAppointment(action) {
  try {
    //   pushNotification('Get data success', 'success', 'TOP_CENTER', 1000)
      yield put(handleAddDateSuccess(action.data.formData))
      yield put(reset('caldendar-form'));
   
  } catch (error) {
    // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000)
    // yield put(getListFailure())
  }
}

function* watchAddRequest() {
  yield takeLatest(Add_APPOINTMENT, addAppointment)
}

export default function* sagas() {
  yield all([
    watchAddRequest()
  ])
}
