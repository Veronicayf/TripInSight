import axios from 'axios'
import { getAllGuides, getGuideById, postGuideReducer } from './guidesSlice'

export const getAllG = () => {
    return async (dispatch) => {
    let json = await axios.get("http://localhost:4000/guides");
    return dispatch(getAllGuides(json.data));
  }
};

export const getGuideId = (id) => {
    return async (dispatch) => {
      let {data} = await axios.get(`http://localhost:4000/guides/${id}`);
      return dispatch(getGuideById(data));
    };
  };


export const postGuide = (guideDate) => {
  return async (dispatch) => {
    try {
      let {data} = await axios.post('http://localhost:4000/guides', guideDate);
      return dispatch(postGuideReducer(data));
    } catch (error) {
      console.error(error)
    }
  }
}