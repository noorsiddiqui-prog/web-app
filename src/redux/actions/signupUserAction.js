import axios from 'axios';
import BASE_URL from "../../config";
import {CREATE_USER} from '../constants/actionTypes'

  export const signupUserAction = (bodyData) => {
    console.log("we are here", bodyData);
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
      // Return promise with success and failure actions
      // return axios.post(`${BASE_URL}api/register/`,
      return axios.post(`http://127.0.0.1:8000/api/register/`,
      bodyData

      ).then(
        res => dispatch({ type: CREATE_USER, payload: res.data }),
        err => alert(err)
      );
    };
  };