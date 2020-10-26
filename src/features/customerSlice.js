import { createSlice } from "@reduxjs/toolkit";

// state

export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customer: null,
  },

  reducers: {
    addCustomer: (state, action) => {
      state.customer = action.payload;
    },
  },
});

// actions
export const { addCustomer } = customerSlice.actions;

// selector
export const selectCustomer = (state) => state.customer.customer;

export default customerSlice.reducer;
