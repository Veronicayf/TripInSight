import axios from "axios";
import {
  addFavReducer,
  getAllFavsReducer,
  getAllUsers,
  getUserDetail,
  loggedUserReducer,
  removeFavReducer,
  updateUserReducer,
  getPurchasedByIdReducer,
  subscribeReducer,
  getAllPurchasedReducer,
} from "./usersSlice";

const URL = "https://tripinsight.onrender.com"; //"http://localhost:4000"

export const getUsers = (page, pagesize) => {
  return async (dispatch) => {
    let { data } = await axios(
      `${URL}/user/all?page=1&pagesize=20`
    );
    return dispatch(getAllUsers(data));
  };
};

export const loggedUser = (user) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(`${URL}/user`, user);
      return dispatch(loggedUserReducer(response.data));

      //await dispatch(getUserId(response.data.id));
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const getUserId = (id) => {
  return async (dispatch) => {
    let { data } = await axios.get(`${URL}/user/getuser/${id}`);
    return dispatch(getUserDetail(data));
  };
};

export const updateUser = (userData) => {
  return async (dispatch) => {
    try {
      let response = await axios.put(`${URL}/user/updateuser`, userData);
      return dispatch(updateUserReducer(response.data));
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const addFav = (tourId, userId) => {
  return async (dispatch) => {
    try {
      let response = await axios.put(`${URL}/user/addfavorite`, {
        tourId,
        userId,
      });
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
      let { data } = await axios.delete(url, {
        data: deleteFav,
      });
      return dispatch(removeFavReducer(data));
    } catch (error) {
      console.log(error.data);
    }
  };
};

export const getAllFav = (userId) => {
  //console.log('getall', userId);
  return async (dispatch) => {
    try {
      let response = await axios.get(`${URL}/user/allfavs/${userId}`);
      //console.log('aqui', response);
      return dispatch(getAllFavsReducer(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPurchesedById = (userId) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `${URL}/purchased/getuserpurchaseds/${userId}`
      );
      return dispatch(getPurchasedByIdReducer(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const subscribeUser = (email) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/user/subscribe`, { email });
      if (response.status === 200) {
        dispatch(subscribeReducer(true));
      } else {
        dispatch(subscribeReducer(false));
      }
    } catch (error) {
      console.error("Error subscribing:", error.message);
      dispatch(subscribeReducer(false));
    }
  };
};

export const getAllPurchased = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${URL}/purchased/all?page=1&pagesize=50`);
      return dispatch(getAllPurchasedReducer(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
