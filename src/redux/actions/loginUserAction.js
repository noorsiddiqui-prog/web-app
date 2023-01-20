import axios from 'axios';
import BASE_URL from "../../config";
import {GET_USER} from '../constants/actionTypes'

  export const loginUserAction = (bodyData) => {
    console.log("we are here", bodyData);
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
      // Return promise with success and failure actions
     
      return axios.post(`http://127.0.0.1:8000/api/login/`,
      bodyData

      ).then(
        res => dispatch({ type: GET_USER, payload: res.data }),
        err => alert(err)
      ).then((response) => {
        console.log(response);
        if (response.payload.token) {
          localStorage.setItem("user", JSON.stringify(response.payload.token));
        }
    
        return response.data
    })
    };
  };

  