import {
    Add_APPOINTMENT,
    Add_APPOINTMENT_SUCCESS,
    Add_APPOINTMENT_FAILURE
  } from './actionTypes'
  
  
  export const handleAddDate = (data) => ({
    type: Add_APPOINTMENT,
    data
  })
  
  export const handleAddDateSuccess = (data) => ({
    type: Add_APPOINTMENT_SUCCESS,
    payload: data
  })
  
  export const handleAddDateFailure = () => ({
    type: Add_APPOINTMENT_FAILURE
  })
  