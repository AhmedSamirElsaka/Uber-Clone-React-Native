import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: {
    location: {
      lat: 31.25654,
      lng: 32.28411,
    },
    describtion: "Port Said, Egypt",
  },
  destination: {
    location: {
      lat: 30.033333,
      lng: 31.233334,
    },
    describtion: "Port Said, Egypt",
  },
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
