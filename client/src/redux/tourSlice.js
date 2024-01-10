import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  initialDate: "",
  endDate: "",
  image: "",
  country: "",
  city: "",
  type: "",
  capacity: "",
  description: "",
  season: "",
  status: "",
  price: "",
  equipment: "",
};

export const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    addTour: (state, action) => {
      const {
        name,
        initialDate,
        endDate,
        image,
        country,
        city,
        type,
        capacity,
        description,
        season,
        status,
        price,
        equipment,
      } = action.payload;
      state.name = name;
      state.initialDate = initialDate;
      state.endDate = endDate;
      state.image = image;
      state.country = country;
      state.city = city;
      state.type = type;
      state.capacity = capacity;
      state.description = description;
      state.season = season;
      state.status = status;
      state.price = price;
      state.equipment = equipment;
    },
  },
});

export const { addTour } = tourSlice.actions;
export default tourSlice.reducer;
