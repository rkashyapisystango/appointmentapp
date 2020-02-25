import {
    GET_LIST,
    GET_LIST_SUCCESS,
    GET_LIST_FAILURE
  } from 'actions/Auth/actionTypes'
import { Add_APPOINTMENT, Add_APPOINTMENT_SUCCESS, Add_APPOINTMENT_FAILURE } from 'actions/Appointments/actionTypes';
  
  const initialState = {
    isLoading: false,
    calendarData: [{
        title: 'Teacher',
        companyName: 'Abc',
        companyStreet: 'Ab road',
        companyCity: 'Indore',
        comments: 'this is test task',
        date: '2020-02-24',
        selectedTime: '',
        resourceId: 'a',
    },{
        title: 'Teacher 2',
        companyName: 'Abc 2',
        date: '2020-02-25',
        companyStreet: 'Ab road 2',
        companyCity: 'Indore 2',
        comments: 'this is test task 2',
        selectedTime: '',
        resourceId: '2',
    }]
  }
  
  const getList = (state, action) => ({
    ...state,
    isLoading: true,
    calendarData: initialState,
  })
  
  const getListSuccess = (state, action) => {
    console.log('check the data in reducer', action)
    return ({
      ...state,
      isLoading: false,
      calendarData: action.payload
    })
  }
  
  const getListFailed = (state, action) => ({
    ...state,
    isLoading: false,
    calendarData: []
  })

  const addAppointmentList = (state, action) => ({
    ...state,
    isLoading: true,
  })

  const addAppointmentSuccess = (state, action) => {
      console.log(state)
      return({
    ...state,
    isLoading: true,
    calendarData: state.calendarData.concat([action.payload])
  })
}

  const addAppointmentFailure = (state, action) => ({
    ...state,
    isLoading: true,
    calendarData: []
  })
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_LIST: return getList(state, action)
      case GET_LIST_SUCCESS: return getListSuccess(state, action)
      case GET_LIST_FAILURE: return getListFailed(state, action);
      case Add_APPOINTMENT: return addAppointmentList(state, action);
      case Add_APPOINTMENT_SUCCESS: return addAppointmentSuccess(state, action);
      case Add_APPOINTMENT_FAILURE: return addAppointmentFailure(state, action);
     
      default: return state
    }
  }
  
  export default authReducer
  