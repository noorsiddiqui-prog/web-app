import { combineReducers } from "redux";
import signupUserReducer from "./signupUserReducer";
import loginUserReducer from './loginUserReducer';
import attendanceUserReducer from './attendanceUserReducer';
import allUserReducer from './allUserReducer';

export default combineReducers({
    signupUserReducer,
    loginUserReducer,
    attendanceUserReducer,
    allUserReducer,
    
});
