import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
      {
        img: "https://pixabay.com/get/g14d583419cda5dd4a4b2dde17fa7440a3a9f7679943af1c9ae9b4fe942b4e7386e7d7f6c5593c2b1bd660ace05dc49cb_1280.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/get/g39588aa9f328ea385018ba4383fc1e406f80353fa308f126e376cb4b1cdacfb051c7c64a089cff38a50a1412ab5b50010f4d4b8ad2fb6bbdd6b71c3bb2659270_1280.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/get/ge3be0293cc51258afa66b65b74c65627cb9c4b784ee3e8e88a4b87859bc358329ca09ddab98f01f05a4461fec1487278b57fa986bab6ab1390b6e85b7df08337_1280.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/get/g43f4cba5c92caaaaaecbf1d2a65deb1e8999e80e78de4ada15467b854e086a338fbd897a7a3f7a09bd61d9499965e2077f0b0cbe3056110f07d568a6c2ae3a87_1280.png",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://pixabay.com/get/gd91ff148eea28a7aaf9d6ef4335a630cb97b425b1298a199bb68dea408e7fe8125156e52b07912af66ba874257a3268b_1280.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
          item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
          item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
