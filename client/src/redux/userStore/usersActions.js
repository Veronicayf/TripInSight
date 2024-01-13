import axios from 'axios'
import { getAllUsers, getUserDetail, setLogin } from './usersSlice'

//Pedir a Raul que me haga la ruta.
// export const getUsers = () => {
//     return async (dispatch) => {
//         let {data} = await axios("http://localhost:4000/user");
//         return dispatch(getAllUsers(data));
//     };
// };

export const getUserId = (id) => {
    return async (dispatch) => {
      let {data} = await axios.get(`http://localhost:4000/user/${id}`);
      return dispatch(getUserDetail(data));
    };
  };

export const loging = () => (dispatch) => {
    dispatch(setLogin());
  };