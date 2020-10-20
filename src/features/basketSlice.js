import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      return [...state, action.payload];
    },
    removeFromBasket: (state, action) => {},
  },
});

// actions
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// selector
export const selectBasket = (state) => state.basket;

export default basketSlice.reducer;
