// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://pixabay.com/get/g9a5c6d7187957a02049a1b563496f4555f30362d99cc2464e8cf4dade847325a6a40cf6b8a45f6e81d0e71d8dba76bd5_1280.jpg",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/get/g511e36e47a6c9afbbbaf73f282cedd737a714c26af576d337ba429f8868b67cd6e040913496bdb56f548e611ca5a933bedac5ca7acc1fefec06437bf12f0047a_1280.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/get/g1092788b74ccd210065daf3ad6117e383b5f0255392ebc76deb0408219523ee986fe7281b40f2f4c10b97bd9495bf44e6fc8dc6f82f6a638d8bfbad289184d50_1280.jpg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/get/gf21e6c7e24d04502279ae88de52390bd2f0382b4178b8be4a8be0b113ba9e0a9ebbb7c4072e7b3909302cce7e032cb175955dff25eb22c3fc2aec9cb2688176d_1280.jpg",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/get/g1ab0da020ba9c28989178517114c12d76fc843628cf818b253ce820c069fd2657ba3c79529b42a2b5579d883be4d6a6f_1280.jpg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
