import axios from "axios";
import {
  filterTourByContinent,
  getAllTours,
  getTourById,
  searchTourByName,
  searchTourByTags,
  sortToursByPrice,
  postTour,
  addTourCartReducer,
  cartTotalReducer,
  removeFromCartReducer,
  cartQuantityReducer,
} from "./toursSlice";

const URL = "http://localhost:4000"  //"https://tripinsight.onrender.com"

export const getAllT = () => {
  return async (dispatch) => {
    let json = await axios.get(`${URL}/tours`);
    return dispatch(getAllTours(json.data));
  };
};

export const getTourId = (id) => {
  return async (dispatch) => {
    let { data } = await axios.get(
      `${URL}/tours/${id}`
    );
    return dispatch(getTourById(data));
  };
};

export const getTourName = (tour) => {
  return async (dispatch) => {
    let { data } = await axios.get(
      `${URL}/tours/nameTour?nameTour=${tour}`
    );
    return dispatch(searchTourByName(data));
  };
};

//veronica__________________
export const postTourAction = (posteoTour) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${URL}/tours`,
        posteoTour
      );
      dispatch(postTour(response.data));
      Swal.fire({
        icon: "success",
        title: "Tour  created",
        showConfirmButton: false,
        timer: 1500,
    });

    } catch (error) {
      // Manejar errores de red u otros
      console.error("Error to create tour:", error);

      Swal.fire({
        icon: "error",
        title: "Error to create tour",
        text: "Please try again later",
      });
    }
  };
};

export const searchTourTags = (tour) => {
  return async (dispatch) => {
    let { data } = await axios.get(
      `${URL}/tours/tags?tags=${tour}`
    );
    return dispatch(searchTourByTags(data));
  };
};

export const filterContinent = (tour) => {
  return async (dispatch) => {
    if (tour === "all") {
      return dispatch(filterTourByContinent("all"));
    }
    try {
      let { data } = await axios.get(
        `${URL}/tours/continent?continent=${tour}`
      );
      return dispatch(filterTourByContinent(data));
    } catch (error) {
      console.error("Error filter continent:", error);
    }
  };
};

export const sortToursPrice = () => {
  return (dispatch) => {
    dispatch(sortToursByPrice());
  };
};

export const addTourCart = (tour) => {
  return (dispatch) => {
    const cart = {
      id: tour.id,
      nameTour: tour.nameTour,
      image: tour.image,
      price: tour.price,
      equipment: tour.equipment,
      initialDate: tour.initialDate,
      places: tour.places
    };
    dispatch(addTourCartReducer(cart));
  };
};
export const removeTourFromCartAction = (tour) => {
  return (dispatch) => {
    dispatch(removeFromCartReducer(tour));
  };
};

export const cartTotal = (price) => {
  return (dispatch) => {
    dispatch(cartTotalReducer(price));
  };
};

// export const updateTour = (id, tourData) => {
//   return async (dispatch) => {
//     let { data } = await axios.put(
//       `${URL}/tours/${id}`, {tourData}
//     );
//     return dispatch((data));
//   };
// };

export const cartQuantity = (quantity) => {
  return (dispatch) => {
    dispatch(cartQuantityReducer(quantity));
  };
};

