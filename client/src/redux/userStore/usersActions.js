import axios from 'axios'
import { addFavReducer, getAllUsers, getUserDetail, loggedUserReducer, removeFavReducer, updateUserReducer } from './usersSlice'

export const getUsers = (page, pagesize) => {
  return async (dispatch) => {
    let { data } = await axios(`http://localhost:4000/user/all?page=${page}&pagesize=${pagesize}`);
    return dispatch(getAllUsers(data));
  };
};

export const loggedUser = (user) => {
  return async (dispatch) => {
    try {
      let response = await axios.post("http://localhost:4000/user", user);
      dispatch(loggedUserReducer(response.data));

      //await dispatch(getUserId(response.data.id));
      
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const getUserId = (id) => {
    return async (dispatch) => {
      let {data} = await axios.get(`http://localhost:4000/user/getuser/${id}`);
      return dispatch(getUserDetail(data));
    };
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

export const addFav = (tourId, userId) => {
  
  return async (dispatch) => {
   try { 
    let response = await axios.put("http://localhost:4000/user/addfavorite", {tourId, userId});
    return dispatch(addFavReducer(response.data));
  } catch(error) {
    console.log(error);
  }
  }
};

export const removeFav = (tourId, userId) => {
  const url = "http://localhost:4000/user/deletefavoritetour";
  const deleteFav = {tourId, userId}
  return async (dispatch) => {
   try { 
    let {data} = await axios.delete(url, {
      data: deleteFav
    });
    return dispatch(removeFavReducer(data));
  } catch(error) {
    console.log(error.data);
  }
}
