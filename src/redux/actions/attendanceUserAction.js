import axios from "axios";
import BASE_URL from "../../config";
import { ATTENDANCE_USER } from "../constants/actionTypes";

export const attendanceUserAction = (username, url) => {
  console.log("we are here in attendance", username, url);
  return (dispatch) => {
    return axios
      .post(`http://127.0.0.1:8000/hotel-user/`, {
        username: username,
        image: url,
      })
      .then(
        (res) => dispatch({ type: ATTENDANCE_USER, payload: res.data }),
        (err) => alert(err)
      )
      .then((response) => {
        console.log(response);
      });
  };
};
