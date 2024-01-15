import axios from 'axios'
import { getAllGuides, getGuideById } from './guidesSlice'

export const getAllG = () => {
    return async (dispatch) => {
    let json = await axios.get("http://localhost:4000/guides");
    return dispatch(getAllGuides(json.data));
  }
};

  export const getGuideId = (id) => {
    return async (dispatch) => {
      let json = await axios.get(`http://localhost:4000/guides/${id}`);
      return dispatch(getGuideById(json.data));
    };
  };