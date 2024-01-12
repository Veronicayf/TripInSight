import axios from 'axios'
import { getAllTours, getTourById } from './toursSlice'

export const getTours = () => {
    return async (dispatch) => {
    let json = await axios.get("/tours");
    return dispatch(getAllTours(json.data));
  }
};

  export const getDetail = (id) => {
    return async (dispatch) => {
      let json = await axios.get(`/tours/${id}`);
      return dispatch(getTourById(json.data));
    };
  };