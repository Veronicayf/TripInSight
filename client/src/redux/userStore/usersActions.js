import axios from 'axios'
import { addFavReducer, getAllFavsReducer, getAllUsers, getPurchasedByIdReducer, getUserDetail, loggedUserReducer, removeFavReducer, updateUserReducer } from './usersSlice'

const URL = "http://localhost:4000"  //"https://tripinsight.onrender.com"

export const getUsers = (page, pagesize) => {
  return async (dispatch) => {
    let { data } = await axios(
      `${URL}/user/all?page=${page}&pagesize=${pagesize}`
    );
    return dispatch(getAllUsers(data));
  };
};

export const loggedUser = (user) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(
        `${URL}/user`,
        user
      );
      dispatch(loggedUserReducer(response.data));

      //await dispatch(getUserId(response.data.id));
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const getUserId = (id) => {
  return async (dispatch) => {
    let { data } = await axios.get(
      `${URL}/user/getuser/${id}`
    );
    return dispatch(getUserDetail(data));
  };
};

export const updateUser = (userData) => {
  return async (dispatch) => {
    try {
      let response = await axios.put(
        `${URL}/user/updateuser`,
        userData
      );
      return dispatch(updateUserReducer(response.data));
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const addFav = (tourId, userId) => {
  return async (dispatch) => {
    try {
      let response = await axios.put(
        `${URL}/user/addfavorite`,
        { tourId, userId }
      );
      return dispatch(addFavReducer(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFav = (tourId, userId) => {
  const url = `${URL}/user/deletefavoritetour`;
  const deleteFav = { tourId, userId };
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
}

export const getAllFav = (userId) => {
  //console.log('getall', userId);
  return async (dispatch) => {
   try { 
    let response = await axios.get(`${URL}/user/allfavs/${userId}`);
    //console.log('aqui', response);
    return dispatch(getAllFavsReducer(response.data));
  } catch(error) {
    console.log(error);
  }
  }
};

export const getPurchesedById = (userId) => {
  return async (dispatch) => {
    try { 
     let response = await axios.get(`${URL}/purchased/getpurchased/${userId}`);
     return dispatch(getPurchasedByIdReducer(response.data));
   } catch(error) {
     console.log(error);
   }
  }
}
