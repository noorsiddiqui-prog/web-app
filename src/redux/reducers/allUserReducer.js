import { ALL_USER  } from './../constants/actionTypes';


const allUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USER:
        // console.log("in actions");
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default allUserReducer;
