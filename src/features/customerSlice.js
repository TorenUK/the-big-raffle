import { createSlice } from "@reduxjs/toolkit";

// state

export const customerSlice = createSlice({
  name: "customer",
  initialState: null,

  reducers: {
    addCustomer: (state, action) => {
      return (state = action.payload);
    },
  },
});

// actions
export const { addCustomer } = customerSlice.actions;

// selector
export const selectCustomer = (state) => state.customer;

export default customerSlice.reducer;
