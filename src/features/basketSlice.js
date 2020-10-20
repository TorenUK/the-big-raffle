import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      return state.push(action.payload);
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export const selectBasket = (state) => state.basket.basket;

export default basketSlice.reducer;
