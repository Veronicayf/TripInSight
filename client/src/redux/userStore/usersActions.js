import axios from "axios";
import {
  getAllUsers,
  getUserDetail,
  loggedUserReducer,
  updateUserReducer,
} from "./usersSlice";

//ver error -> sequelizedatabase error
// export const getUsers = () => {
//     return async (dispatch) => {
//         let {data} = await axios("http://localhost:4000/user/all");
//         return dispatch(getAllUsers(data));
//     };
// };

export const getUserId = (id) => {
  return async (dispatch) => {
    let { data } = await axios.get(
      `https://tripinsight.onrender.com/user/getuser/${id}`
    );
    return dispatch(getUserDetail(data));
  };
};

export const loggedUser = (user) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(
        "https://tripinsight.onrender.com/user",
        user
      );
      return dispatch(loggedUserReducer(response.data));
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const updateUser = (userData) => {
  return async (dispatch) => {
    try {
      let response = await axios.put(
        "https://tripinsight.onrender.com/user/updateuser",
        userData
      );
      return dispatch(updateUserReducer(response.data));
    } catch (error) {
      console.log(error.response.data);
    }
  };
};
