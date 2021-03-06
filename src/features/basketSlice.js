import { createSlice } from "@reduxjs/toolkit";

// state

export const basketSlice = createSlice({
  name: "basket",
  initialState: [],

  reducers: {
    addToBasket: (state, action) => {
      return [...state, action.payload];
    },
    removeFromBasket: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    emptyBasket: (state) => {
      return (state = []);
    },
  },
});

// actions
export const {
  addToBasket,
  removeFromBasket,
  emptyBasket,
} = basketSlice.actions;

// selector
export const selectBasket = (state) => state.basket;

export default basketSlice.reducer;
