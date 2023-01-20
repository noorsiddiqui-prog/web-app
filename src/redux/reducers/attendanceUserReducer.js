import { ATTENDANCE_USER } from '../constants/actionTypes';


const attendanceUserReducer = (state = { users: [] }, action) => {
  console.log("attendance reducer", action.payload);
  switch (action.type) {
    case ATTENDANCE_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default attendanceUserReducer;
