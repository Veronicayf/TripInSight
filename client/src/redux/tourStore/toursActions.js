import axios from "axios";
import { getAllTours, getTourById, searchTourByName } from "./toursSlice";

export const getAllT = () => {
  return async (dispatch) => {
    let json = await axios.get("http://localhost:4000/tours");
    return dispatch(getAllTours(json.data));
  };
};


  export const getTourId = (id) => {
    return async (dispatch) => {
      let {data} = await axios.get(`http://localhost:4000/tours/${id}`);
      return dispatch(getTourById(data));
    };
  };

export const getTourName = (tour) => {
  return async (dispatch) => {
    let {data} = await axios.get(`http://localhost:4000/tours/tags?tags=${tour}`);
    return dispatch(searchTourByName(data));
  }
}