import axios from "axios";
import { getAllTours, getTourById } from "./toursSlice";

export const getAllT = () => {
  return async (dispatch) => {
    let json = await axios.get("http://localhost:4000/tours");
    return dispatch(getAllTours(json.data));
  };
};

export const getTourId = (id) => {
  return async (dispatch) => {
    let { data } = await axios.get(`http://localhost:4000/tours/${id}`);
    return dispatch(getTourById(data));
  };
};
