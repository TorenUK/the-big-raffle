import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "../features/basketSlice";

export default configureStore({
  reducer: {
    basket: basketSlice.reducer,
  },
});
