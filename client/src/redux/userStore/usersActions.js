import axios from 'axios'
import { getAllUsers, getUserDetail, loggedUserReducer, updateUserReducer } from './usersSlice'

//ver error -> sequelizedatabase error
// export const getUsers = () => {
//     return async (dispatch) => {
//         let {data} = await axios("http://localhost:4000/user/all");
//         return dispatch(getAllUsers(data));
//     };
// };

export const getUserId = (id) => {
    return async (dispatch) => {
      let {data} = await axios.get(`http://localhost:4000/user/getuser/${id}`);
      return dispatch(getUserDetail(data));
    };
  };

export const loggedUser = (user) => {
  return async (dispatch) => {
   try { 
    let response = await axios.post("http://localhost:4000/user", user);
    return dispatch(loggedUserReducer(response.data));
  } catch(error) {
    console.log(error.response.data);
  }
  }
};

export const updateUser = (userData) => {
  return async (dispatch) => {
   try { 
    let response = await axios.put("http://localhost:4000/user/updateuser", userData);
    return dispatch(updateUserReducer(response.data));
  } catch(error) {
    console.log(error.response.data);
  }
  }
};