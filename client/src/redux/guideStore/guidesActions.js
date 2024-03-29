import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";
import {
  deleteGuideReducer,
  getAllGuides,
  getGuideById,
  postGuideReducer,
  updateGuideReducer,
} from "./guidesSlice";

const URL = "https://tripinsight.onrender.com"; //"http://localhost:4000"; //"https://tripinsight.onrender.com"

export const getAllG = (page, pageSize) => {
  return async (dispatch) => {
    let json = await axios.get(`${URL}/guides?page=1&pagesize=100`);
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

export const updateGuide = (guideData) => {
  return async (dispatch) => {
    try {
      console.log(guideData);
      let response = await axios.put(
        "https://tripinsight.onrender.com/guides/updateguide",
        guideData
      );
      return dispatch(updateGuideReducer(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteGuide = (guideId) => {
  // const url = `${URL}/guides`;
  // const deleteG = { guideId };
  return async (dispatch) => {
    try {
      //console.log('id action', guideId);
      let { data } = await axios.delete(`${URL}/guides/${guideId}`);
      return dispatch(deleteGuideReducer(data));
    } catch (error) {
      console.log(error.data);
    }
  };
};
