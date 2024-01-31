import axios from 'axios'
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";
import { getAllGuides, getGuideById, postGuideReducer } from './guidesSlice'

const URL = "http://localhost:4000"  //"https://tripinsight.onrender.com"

export const getAllG = (page, pagesize) => {
  return async (dispatch) => {
    let json = await axios.get(`${URL}/guides?page=1&pagesize=10`); //?page=1&pagesize=10
    return dispatch(getAllGuides(json.data));
  };
};

export const getGuideId = (id) => {
  return async (dispatch) => {
    let { data } = await axios.get(`${URL}/guides/${id}`);
    return dispatch(getGuideById(data));
  };
};


export const postGuide = (guideDate) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(`${URL}/guides`, guideDate);
      dispatch(postGuideReducer(data));
      Swal.fire({
        icon: "success",
        title: "Guide created",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      // Manejar errores de red u otros
      console.error("Error to create Guide:", error);

      Swal.fire({
        icon: "error",
        title: "Error to create guide",
        text: "Please try again later",
      });

    }
  };
};
