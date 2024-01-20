import axios from "axios";
import { filterTourByContinent, getAllTours, getTourById, searchTourByName, searchTourByTags, sortToursByPrice, postTour} from "./toursSlice";

export const getAllT = () => {
  return async (dispatch) => {
    let json = await axios.get("https://tripinsight.onrender.com/tours");
    return dispatch(getAllTours(json.data));
  };
};


  export const getTourId = (id) => {
    return async (dispatch) => {
      let {data} = await axios.get(`https://tripinsight.onrender.com/tours/${id}`);
      return dispatch(getTourById(data));
   };
};

export const getTourName = (tour) => {
  return async (dispatch) => {

    let {data} = await axios.get(`https://tripinsight.onrender.com/tours/nameTour?nameTour=${tour}`);
    return dispatch(searchTourByName(data));
  }
}



//veronica__________________
export const postTourAction = (posteoTour) => {
  console.log('action problematico', postTour)
  return async (dispatch) => {
    try {
      const response = await axios.post("https://tripinsight.onrender.com/tours", posteoTour);
      dispatch(postTour(response.data));
    } catch (error) {
      console.error("error en la accion:", error);
    }
  }
  };



export const searchTourTags = (tour) => {
  return async (dispatch) => {
    let {data} = await axios.get(`https://tripinsight.onrender.com/tours/tags?tags=${tour}`);
    return dispatch(searchTourByTags(data));
  }
}

export const filterContinent = (tour) => {
  return async (dispatch) => {
    let {data} = await axios.get(`https://tripinsight.onrender.com/tours/continent?continent=${tour}`);
    return dispatch(filterTourByContinent(data));
  }
}

export const sortToursPrice = () => {
  return (dispatch) => {
    dispatch(sortToursByPrice());
  }

}