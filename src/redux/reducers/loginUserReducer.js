import { GET_USER } from '../constants/actionTypes';


const loginUserReducer = (state = { users: [] }, action) => {
  console.log("get reducer", action.payload);
  switch (action.type) {
    case GET_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default loginUserReducer;
