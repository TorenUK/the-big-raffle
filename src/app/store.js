import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "../features/basketSlice";
import { customerSlice } from "../features/customerSlice";

export default configureStore({
  reducer: {
    basket: basketSlice.reducer,
    customer: customerSlice.reducer,
  },
});
