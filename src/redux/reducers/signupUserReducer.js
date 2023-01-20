import { CREATE_USER } from '../constants/actionTypes';


const signupUserReducer = (state = { users: [] }, action) => {
  console.log("create reducer", action.payload);
  switch (action.type) {
    case CREATE_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default signupUserReducer;
