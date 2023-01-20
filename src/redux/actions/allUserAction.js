import {ALL_USER}  from '../constants/actionTypes'
import  axios  from 'axios';

export const allUserAction = () => {
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
      // Return promise with success and failure actions
      return axios.get('http://127.0.0.1:8000/get-hotel-user/').then(  
        res => dispatch({ type: ALL_USER, payload: res.data }),
        err => alert(err)
      );
    };
  };
